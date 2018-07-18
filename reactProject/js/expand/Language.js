// language类接收父类传过来的flag_key，假如AsyncStorage没有getItem没有结果，则先setItem存，存后过，下次就取

import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import keys from '../../res/data/keys.json'
export var FLAG_LANGUAGE = {flag_language: 'language_dao_language', flag_key: 'language_dao_key'}
export default class Language {
    constructor(flag){//父页面传过来
        this.flag = flag
    }
    fetch(){
        return new Promise((resolve,reject)=>{
          AsyncStorage.getItem(this.flag,(error,result)=>{
            if(error){
              reject(error)
            }else {
              if(result){
                try {
                  resolve(JSON.parse(result))
                } catch (error) {
                  reject(error)
                }
              }else {
                var data = this.flag === FLAG_LANGUAGE.flag_key ? keys : null
                this.save(data)
                resolve(data)
              }
            }
          })
        })
    }
    save(data) {
      var stringData=JSON.stringify(data);
      AsyncStorage.setItem(this.flag,stringData,(error,result)=>{} )
    }
}