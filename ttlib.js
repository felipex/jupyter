
const confs = {
	"raio": 0.3
}

function world() {
	return {"g": 9.8}
}



var firebaseConfig = {
    apiKey: "AIzaSyCIVWdpEFnG91750UYvRRbAssIz34cD1xs",
    authDomain: "appex-ufca.firebaseapp.com",
    databaseURL: "https://appex-ufca.firebaseio.com",
    projectId: "appex-ufca",
    storageBucket: "appex-ufca.appspot.com",
    messagingSenderId: "681227461511",
    appId: "1:681227461511:web:07b292ee6b08b38b"
};
var firebase = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

var ref = database.ref('teste');

function update_conf() {
	console.log("Marcou");
    let sessoes = ref.child('raio');
    sessoes.get().then(function(snapshot) {
		//console.log("OK OK");
		//console.log(snapshot.toJSON());
		confs["raio"] = snapshot.toJSON();

        snapshot.forEach(function(el){
            //console.log(el.ref.key);
			//console.log(el.toJSON());
        });
    });
}

update_conf()

function raio() {
    update_conf()
	return confs["raio"]
}


