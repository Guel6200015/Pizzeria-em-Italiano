menuListArray = [ "Marguerita","Pizza alla menta con pollo grattugiato e miniere di formaggio","Pizza di picanha bovina con insalata di ora pro nobis e parmigiano","Pizza vegana con formaggio di soia, insalata di lattuga e pomodoro, piena di olio d'oliva"                 
                                          ]; //Adicione mais nomes de pizza

function getmenu()
{
    var htmldata="displayMenu";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("         ").innerHTML = htmldata;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("menuListArray").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push (item);
}

