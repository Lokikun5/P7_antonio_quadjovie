
import axios from 'axios';
export default class AuthService {           

    async signup(nom, prenom, email, password) {
        return axios.post("http://localhost:3000/api/user/signup", {
            nom: self.nom,
            prenom: self.prenom,
            email: self.email,
            password: self.password,
          })
          .then(function (response) {
            const token = response.data.token;
            const num = response.data.userId;
            console.log(token);
            console.log(num);
            
          })
          .catch(function (error) {
            if (error) {
              self.incorrect = true;
            }
          });
    }
    
};

