const selectOrg=document.testForm.selectOrg;

function addFunction(){
    console.clear();
    
    console.log("До:",selectOrg.options[selectOrg.options.length-1]);

    
    let option = document.createElement("option");
    option.value=selectOrg.options.length;
    option.text=`Новая организация ${selectOrg.options.length}`;

    selectOrg.add(option,null);

    console.log("Организация добавлена");
    console.log("После:",selectOrg.options[selectOrg.options.length-1]);
}



function logFunction(){
   console.clear();

   console.log("selectOrg.selectedOptions.length:",selectOrg.selectedOptions.length);
   console.log("selectOrg.options.length:",selectOrg.options.length);

   console.log("selected index:",selectOrg.selectedOptions[0].index);
   console.log("selected value:",selectOrg.selectedOptions[0].value);
   console.log("selected label:",selectOrg.selectedOptions[0].label);
   console.log("selected text:",selectOrg.selectedOptions[0].text);
   
}













//    let index = document.testForm.selectOrg.options.selectedIndex;
//    let form = document.testForm.selectOrg;  
 
//    console.log("selected:",document.testForm.selectOrg.options[index]);
//    console.log("Index:",form.options[index].index);
//    console.log("Text:",form.options[index].text);
//    console.log("Value:",form.options[index].value);