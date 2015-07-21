module.exports = {
        /**
         * make post xmlhttp request with data and files
         * @param  {object} postParams - text data key val
         * @param  {object} Obj - files
         * @param  {string} URL - ajax url
         * @return {promise}
         */
        ajaxPost : function(postParams, Obj, URL, Token)
        {
            var data = new FormData();
            for(param in postParams){
               data.append(param, postParams[param]);
            }
            if("files" in Obj && Obj.files.length > 0){
               for (var i = 0, len = Obj.files.length; i < len; i++) {
                     var file = Obj.files[i];
                     if (file.type.match('image.*')) {
                                data.append("files[]", file);
                     }
               };
            }
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.setRequestHeader("Authorization", "token " + Token);
                xhr.open('POST', URL , true);
                xhr.onerror = function (e) {
                     alert("faild to connect the server");
                     return false;
                };
                xhr.onload = function() {
                  if(xhr.status == 200) resolve(JSON.parse(xhr.response));
                  else reject(Error(xhr.statusText));
                };
                xhr.send(data);
            });
        },

        /**
         * make get xmlhttp request
         * @param  {object} getParams - key value pairs
         * @param  {string} URL - ajax url
         * @return {promise}
         */
        ajaxGet : function(getParams, URL)
        {
            var queryStr = "";
            for(query in getParams){
                queryStr += query + '=' + getParams[query] + '&';
            }
            queryStr = queryStr.substring(0, queryStr.length - 1);

            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', URL + queryStr , true);
                xhr.responseType = 'json';

                xhr.onerror = function (e) {
                     alert("faild to connect the server");
                     return false;
                };

                xhr.onload = function() {
                    if(xhr.status == 200) resolve(JSON.parse(xhr.response));
                    else reject(Error(xhr.statusText));
                };
                xhr.send();
            });
        }
}
