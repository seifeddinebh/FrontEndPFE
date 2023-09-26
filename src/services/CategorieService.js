import http from "../services/interceptor/AxiosInterceptor"



export default class CategorieService {




    create(data) {

        console.log("Add User")
        return http.post("/Categorie/Create", data);


    }

    getAll() {

        console.log("liste des users")
        return http.get("/Categorie/List");

    }

    remove(id) {

        console.log("test delete")
        return http.delete("/Categorie/Delete/" + id);
    }
    update(id, data) {

        return http.put("/Categorie/Update/" + id, data);
    }

    GetOne(id) {

        //console.log("liste des users")
        return http.get("/Categorie/GetOne" + id);

    }

    UpdatePhoto(id, data) {

        return http.put("/Categorie/UpdatePhoto/" + id, data);
    }







}


