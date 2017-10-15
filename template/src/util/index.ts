import dingtalk from 'dingtalk-javascript-sdk';

let UA:string = window.navigator.userAgent.toLocaleLowerCase();

export function isDingtalk():boolean{
  return UA.indexOf('dingtalk') > -1;
}

interface setTitleParameterType{
  title:string
}

export function setTitle(parameter:setTitleParameterType):void{
  dingtalk.ready(function(){
    dingtalk.api.biz.navigation.setTitle({
      title:parameter.title
    });
  });
}
