// Attendre le chargement du DOM
$(document).ready(function (){

	/*
	Variables globales
	*/
	var introPage = $("#introPage");
	var contentPage = $("#contentPage");

	// Création du type d'objet Page (constructeur)
	function PageType(titleParam, descriptionParam, contentParam){
		this.title = titleParam;
		this.description = descriptionParam;
		this.content = contentParam;
	};


	// Créer une fonction pour afficher le bon contenu
	function showPages(btn, object){
		// Capter l'évènement click sur le lien "Projet"
		$(btn).click(function(event){

			// Bloquer le comportement naturel de la balise 
			event.preventDefault();
			console.log(object);

			// Modifier le contenu HTML d'une balise
			introPage.html(object.title + object.description);
			contentPage.html(object.content);

		});
	};

	/*
	Créer un tableau d'objet pour le contenu des deux pages (projet/contact)
	*/
	var myContent = [
		{
			title: "<h2>Mes projets en cours</h2>",
			description: "<p>PROJET - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur quia necessitatibus, impedit sed obcaecati dolore recusandae cumque! Recusandae omnis, ipsam dolorum vel nulla non blanditiis mollitia quibusdam natus deserunt.</p>",
			content: '<figure> <img src="img/photo1.jpg" alt="Licorne 1" /> <figcaption>Licorne 1</figcaption> </figure> <figure> <img src="img/photo2.jpg" alt="Licorne 2" /> <figcaption>Licorne 2</figcaption> </figure> <figure> <img src="img/photo3.jpg" alt="Licorne 3" /> <figcaption>Licorne 3</figcaption> </figure> <figure> <img src="img/photo4.jpg" alt="Licorne 4" /> <figcaption>Licorne 4</figcaption> </figure>'
		},

		{
			title: "<h2>A propos</h2>",
			description: "<p>A PROPOS - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur quia necessitatibus, impedit sed obcaecati dolore recusandae cumque! Recusandae omnis, ipsam dolorum vel nulla non blanditiis mollitia quibusdam natus deserunt.</p>",
			content: '<p>CONTENT A PROPOS - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur quia necessitatibus, impedit sed obcaecati dolore recusandae cumque! Recusandae omnis, ipsam dolorum vel nulla non blanditiis mollitia quibusdam natus deserunt.</p>'
		},

		{
			title: "<h2>Contactez moi</h2>",
			description: "<p>CONTACT - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur quia necessitatibus, impedit sed obcaecati dolore recusandae cumque! Recusandae omnis, ipsam dolorum vel nulla non blanditiis mollitia quibusdam natus deserunt.</p>",
			content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.3005854372115!2d2.3571322207989684!3d48.854351836951714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2bbd365849898f2!2sWebforce3!5e0!3m2!1sfr!2sfr!4v1474375620928"></iframe>'
		}
	];

	// Faire une boucle for sur le tableau de données
	for( var i = 0; i < myContent.length; i++){

		// Créer des objets selon la valeur de la variable i
		if ( i == 0) {
			var pageProjet = new PageType(myContent[i].title, myContent[i].description, myContent[i].content);

		} else if ( i == 1) {
			var pageAbout = new PageType(myContent[i].title, myContent[i].description, myContent[i].content);

		} else{
			var pageContact = new PageType(myContent[i].title, myContent[i].description, myContent[i].content);
		}
	};

	// Initier la page avec le contenu de la page projet
	introPage.html(pageProjet.title + pageProjet.description);
	contentPage.html(pageProjet.content);

	// Appeler la fonction pour afficher le bon contenu
	showPages("#btnProjects", pageProjet);
	showPages("#btnAbout", pageAbout);
	showPages("#btnContact", pageContact);

}); // Fin de la fonction de chargement du DOM
