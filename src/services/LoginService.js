import http from "../services/interceptor/AxiosInterceptor"


export default class LoginService {




    Login(data) {
        console.log("*******login on service is ****", data)
        return http.post("/User/Login/", data);


    }

    SendMail(data) {

        return http.post("/User/SendMail/", data);


    }

    Logout(id) {

        return http.get("/User/Logout/" + id);



    }


}