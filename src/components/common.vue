<script>




// class UserInfo{
//     username : String;
//     logined : Boolean;

//     constructor(){
//         this.username = localStorage.getItem("username");
//         this.logined = localStorage.getItem("logined") == "true" ? true : false;
//     }

//     setUsername(username){
//         this.username = username;
//         localStorage.setItem("username",username);
//     }

//     setLogined(flag){
//         if (flag){
//             localStorage.setItem("logined", "true");
//         }else{
//             localStorage.removeItem("logined");
//         }
//     }

//     getUsername(){
//         if (this.username != null){
            
//         }else{
//             this.username = localStorage.getItem("username");
//         }

//         return this.username;
//     }


//     getLogined(){
//         if (this.logined != null){
            
//         }else{
//             this.logined = localStorage.getItem("logined") == "true" ? true : false;
//         }

//         return this.logined;
//     }

// }

// let user = [{
//     username: null,
//     logined : false
// }];



function setUsername(username){
    this.$store.commit('setUsername',username);
    localStorage.setItem("username",username);
}

function setLogined(flag){
    if (flag){
        localStorage.setItem("logined", "true");
        this.$store.commit('setLogined',true);
    }else{
        localStorage.removeItem("logined");
        this.$store.commit('setLogined',false);
    }
}

function getUsername(){
    if (this.$store.state.username == null){
        
        this.$store.commit('setUsername',localStorage.getItem("username"));
    }

    return this.$store.state.username;
}


function getLogined(){
    if (this.$store.state.logined == null){

        this.$store.commit('setLogined',localStorage.getItem("logined") == "true" ? true : false);
    }

    return this.$store.state.logined;
}


function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("logined");
    this.$store.state.username = null;
    this.$store.state.logined = null;
}

export default{
    // user,
    setUsername,
    getUsername,
    setLogined,
    getLogined,
    logout,
};

</script>