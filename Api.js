/**
 * api de dados
 */

import {AsyncStorage} from 'react-native'
import NetInfo from "@react-native-community/netinfo";



export default class Api {

  async getData(){
    NetInfo.fetch().then(async state => {
      if(state.isConnected){ // Se tiver net
        
        let update = await this.getDateUpdate();

        if(update){ // se tiver atualização
          let data = await AsyncStorage.getItem('dataEmpresas');
          this.firstTime(data);
        

          fetch('https://www.quicksearch.com.br/app/appData')
          .then((response) => response.json())
          .then(async (responseJson) => {
              //console.log(responseJson);
              await AsyncStorage.setItem('dataEmpresas' , JSON.stringify(responseJson) );
              await AsyncStorage.setItem('errortNet' , '1');
              //console.log('sucesso');
          })
          .catch(async err => {
            //console.log(err,'getData()');
            this.requestError();
          });
        }
      }else{ // se não tiver net
        //console.log('offline');
        let data = await AsyncStorage.getItem('dataEmpresas');
        //console.log(typeof data, data);
        if(typeof data !== "string"){
          alert("Conecte-se a internet para baixar os dados");
          await AsyncStorage.setItem('errortNet' , 'Conecte-se a internet para baixar os dados' );
        }
      }
    });
  }

  async getDateUpdate(){
    
    let dateInApp = await AsyncStorage.getItem('dateUpdate');
    var update = '';
    await fetch('https://www.quicksearch.com.br/app/dateUpdate')
    .then((response) => response.json())
    .then(async (responseJson) => {
        let dataInSite = responseJson.ultima_atualizacao;
        
        if(dateInApp){
            if(dateInApp === dataInSite){
                //console.log('iguais');
                update = false;
            }else{
                //console.log('diferentes');
                await AsyncStorage.setItem('dateUpdate', dataInSite);
                update = true;
            }

        }else{
            await AsyncStorage.setItem('dateUpdate', dataInSite);  
            update = true; 
        }
    })
    .catch(async err => {
        //console.log(err, 'getDateUpdate');
        this.requestError();
        update =  false;
    });
    return update;
  }

  async firstTime(data){
    if(typeof data !== "string"){
        await AsyncStorage.setItem('errortNet', "Se for sua primeira vez no app, espere os dados serem baixados!");
        //console.log('data vazia');
        //console.log(data);
    }
  }

  async requestError(){
    let data = await AsyncStorage.getItem('dataEmpresas');
    //console.log(data);
    if(typeof data !== "string"){
      await AsyncStorage.setItem('errortNet' , 'O app não pode carregar, conecte a uma internet melhor!' );
      alert("O app não pode carregar, conecte a uma internet melhor!");
    }else{
      await AsyncStorage.setItem('errortNet' , '1' );
    }
  }
  
}
