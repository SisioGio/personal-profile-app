import api from "./api";
import  {jwtDecode} from 'jwt-decode';
const baseUrl = process.env.REACT_APP_BEDROCK_ENDPOINT || "https://664xui6bqd.execute-api.eu-central-1.amazonaws.com"
class ApiService {

  
  getUserFromToken(){
    const token= this.getLocalAccessToken()
    const decodedToken = jwtDecode(token);
    decodedToken.token = token
    return decodedToken
  }
  signin(email, password) {
    return api
      .post(baseUrl+"/user/login", {
        email:email,
        password:password,
      })
      .then((response) => {
        var user
        if (response.data['access-token']) {
          const token= response.data['access-token']
            const decodedToken = jwtDecode(token);
            decodedToken.token = token
            this.setUser(decodedToken);
            user = decodedToken
        }
        return user;
      });
  }
  signup(name,surname,email, password,password_repeat) {
    return api
      .post("/user/register", {
        name:name,
        surname:surname,
        email:email,
        password:password,
        password_repeat: password_repeat
      })
  }
  isAuthenticated = async () => {
    return api.get("/user/check");
  };

  logout() {
    localStorage.removeItem("user");
  }

  register(name, surname, email,password,repeat_password) {
    return api.post("/user/register", {
      name,
      surname,
      email,
      password,
      repeat_password
    });
  }

  getInventory(){
   
     return api.get("/inventory")
  }
  sendMessageToChat(messages,role,role_description,role_task){
    return api.post(baseUrl+"/bedrock/chat",{
      "messages":messages,
      'role':role,
      'role_description':role_description,
      'role_task': role_task
    })
  }
  generateRecipe(question){
    return api.post("/bedrock/recipe",{
      "question":question
    })
  }

  weekMealPrep(question){
    return api.post("bedrock/grocery",{
      "question":question
    })
  }
  updateInventory(items){
    return api.post("/inventory",{ingredients:items})
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }


  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    return user ? user["token"] : null;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.token = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

}

export default new ApiService();
