// AJAX,callback , http requests

        class Request{
                constructor(){
                    this.xhr = new XMLHttpRequest();
                }

                get(url,callback){

                        this.xhr.open(`get`,url);

                        this.xhr.onload = () =>{

                                    if(this.xhr.status == 200){
                                        callback(null,this.xhr.responseText);
                                    }else{
                                        callback(`İşlemimiz Gerçekleştirilemedi`,null);
                                    }
                        }
                        this.xhr.send();
                }
                post(url,data,callback){
                    this.xhr.open(`POST`,url);
                    this.xhr.setRequestHeader(`Content-type`,`application/json`);

                    this.xhr.onload = () =>{

                        if(this.xhr.status == 201){
                            callback(null,this.xhr.responseText);
                        }else{
                            callback(`hatalı mesaj`,null);
                        }
                    }
                    this.xhr.send(JSON.stringify(data));
                }
                put(url,data,callback){
                    this.xhr.open(`PUT`,url);
                    this.xhr.setRequestHeader(`Content-type`,`application/json`);

                    this.xhr.onload = () =>{
                        if(this.xhr.status == 200){
                            callback(null,this.xhr.responseText);
                        }else{
                            callback(`bir hata`,null);
                        }
                    }
                    this.xhr.send(JSON.stringify(data));
                }
                del(url,callback){

                        this.xhr.open(`delete`,url);
                        this.xhr.onload = () =>{
                                    if(this.xhr.status == 200){
                                        callback(null,`VERİ SİLME İŞLEMİ BAŞARILI`);
                                    }else{
                                        callback(`İşlemimiz Gerçekleştirilemedi`,null);
                                    }
                        }
                        this.xhr.send();
                }
                
        }

        const request = new Request();

        // request.get(`https://jsonplaceholder.typicode.com/albums`,function(err,respons){

        //         if(err === null){
        //             console.log(respons);
        //         }else{
        //             document.write(err);
        //         }

        // });


        // request.post(`https://jsonplaceholder.typicode.com/albums`,{userId:2,title:`Thriller`},function(err,album){

        //         if(err === null){
        //             console.log(album);
        //         }else{
        //             console.log(err);
        //         }

        // });

        // request.put(`https://jsonplaceholder.typicode.com/albums/5`,{userId:143,title:`Denemeler`},function(err,albums){
                
        //         if(err===null){
        //             console.log(albums);
        //         }else{
        //             console.log(err);
        //         }
        // });

        request.del(`https://jsonplaceholder.typicode.com/albums/10`,function(err,respons){

                if(err===null){
                    console.log(respons);
                }else{
                    console.log(err);
                }
        });
