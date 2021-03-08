export default (query) => {
    if(query){
        const queryString = query.split("?")[1];
        if(queryString.lengty > 0){
            const params = queryString.split("&");
            const paramsObj = {};
            params.forEach(params => {
                const keyValue = params.split("=");
                paramsObj[keyValue[0]] = keyValue[1];
            });
            return paramsObj;
        }
    }
}