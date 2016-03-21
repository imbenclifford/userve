window.onload = function(){
	/*All variable declarations*/
	var exShow = 		document.getElementById('example-show')
	var signUp = 		document.getElementById('signUp')
	var signIn = 		document.getElementById('signIn')
	var logInBox = 		document.getElementById('logInBox')
	var customContent = document.getElementById('customContent')
	var svgImg = 		customContent.getElementsByTagName('img')
	var directive = 	document.getElementById('directive')
	var kiwix = 		document.getElementById('kiwix')
	var kalite = 		document.getElementById('kalite')
	var links = 		document.getElementById('links')
	var kiwixLink = 	document.getElementById('kiwixLink')
	var kaliteLink = 	document.getElementById('kaliteLink')
	var home = 			document.getElementsByClassName('home')
	var logInBar = 		document.getElementsByClassName('login_bar')
	var contentPage = 	document.getElementById('content_page')
	var loginButton = 	document.getElementsByClassName('loginButton')
	var h1 		= 		contentPage.getElementsByTagName('h1')
	var hugeText = 		h1[0].getElementsByTagName('span')
	var prevAttr = [];
	
	prevAttr[0] = home[0].getAttribute('class');
	prevAttr[1] = logInBar[0].getAttribute('class');
	
	loadLogin = function(){
		home[0].setAttribute('class', prevAttr[0]+' hideHome');
		logInBar[0].setAttribute('class', prevAttr[1]+' showLogInBar');
		
		loginButton[0].style.right = "0px"
		
		for(i = 0; i < hugeText.length; i++){
			hugeText[i].style.marginLeft = "-50px"
			hugeText[i].style.marginRight = "-50px"
			hugeText[i].style.marginTop = "0px"
			hugeText[i].style.marginBottom = "0px"
		}
		currentPage(0,true,0)
	}
	
	loadHomeFromLogin = function(){
		home[0].setAttribute('class', prevAttr[0]);
		
		logInBar[0].setAttribute('class', prevAttr[1]);
		
		loginButton[0].style.right = "-150px"
		
		for(i = 0; i < hugeText.length; i++){
			hugeText[i].style.marginLeft = "-250px"
			hugeText[i].style.marginRight = "-250px"
			hugeText[i].style.marginTop = "0px"
			hugeText[i].style.marginBottom = "0px"
		}
		currentPage(true,0,0)
	}
	
	loadCustomContent = function(){
		directive.style.marginTop = "-33px"
		directive.style.opacity = 0
		menu.style.pointerEvents= 'auto'
		menu.style.opacity = 1
		
		kiwix.style.opacity = 0;
		kalite.style.opacity = 0;
		kiwix.style.pointerEvents= 'none'
		kalite.style.pointerEvents= 'none'
		links.style.height = "100%"
		links.style.top = "0px"
		
		setTimeout(function(){
			svgImg[0].setAttribute('class', 'iconSpinner')
			home[0].setAttribute('class', prevAttr[0]+' empty');
		}, 600)
		currentPage(0,0,true)
	}
	
	loadHomeFromCustomContent = function(){
		directive.style.marginTop = "5px"
		directive.style.opacity = 1
		menu.style.pointerEvents= 'none'
		menu.style.opacity = 0
		
		kiwix.style.opacity = 1;
		kalite.style.opacity = 1;
		kiwix.style.pointerEvents= 'auto'
		kalite.style.pointerEvents= 'auto'
		links.style.height = "50%"
		links.style.top = "50%"
		
		setTimeout(function(){
			svgImg[0].setAttribute('class', ' ')
			home[0].setAttribute('class', prevAttr[0]);
		}, 0)
		currentPage(0,0,true)
	}
	
	var csPage, loginPage, ccPage; 
	currentPage = function(csPageState, loginPageState, ccPageState){
		if(csPageState == true){
			csPage = true
			loginPage = false
			ccPage = false
		} else if(loginPageState == true){
			csPage = false
			loginPage = true
			ccPage = false
		} else {
			csPage = false
			loginPage = false
			ccPage = true
		}
	}
	
	//moves the signUp form into view in the log in bar
	exShow.onclick =function(){
		signUp.style.right = "0px"
		signIn.style.marginLeft = "-100%"
	}
	
	//moves the signIn form into view in the log in bar
	logInBox.onclick =function(){
		signUp.style.right = "-100%"
		signIn.style.marginLeft = "0px"
	}
	
	//undergoes a number of changes to make login page visible
	loginButton[1].onclick =	function(){
		//animates login page to visibility
		loadLogin()
		
		//changes url to suit login page
		stateObjLogin = {newLink : "login"}
		history.pushState(stateObjLogin, "page 2", "login.html")
	}
	
	//undergoes a number of changes to make login page hidden
	loginButton[0].onclick =	function(){
		//animates home page to visibility
		loadHomeFromLogin()
		
		//changes url to suit home page
		history.back()
	}
	
	//undergoes a number of changes to make customised content page visible
	customContent.onclick = function(){
		
		loadCustomContent()
		
		
		stateObj = {newLink : "learningmaterials"}
		history.pushState(stateObj, "page 2", "learningmaterials.html")
	}
	
	//detects currentpage and determines where the page should lead to
	window.onpopstate = function(){
		//alert(document.location.pathname)
		if(document.location.pathname == "/userve/" & loginPage == true){
			//animates home page to visibility
			loadHomeFromLogin()
		}
		if(document.location.pathname == "/userve/" & ccPage == true){
			//animates home page to visibility
			loadHomeFromCustomContent()
		}
	}
	
	//Ajax section: documents are loaded into the current page without page refresh or load
	
	
	//links the icons on the hompage to the kiwix and kalite servers
	kiwixLink.setAttribute('href', "http://" + location.hostname + ":8009");
	kaliteLink.setAttribute('href', "http://" + location.hostname + ":8008");
}