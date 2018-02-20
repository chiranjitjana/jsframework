// JavaScript Document
$( document ).ready(function() {
    
	nav = new Object();
	
	nav.createHRNav=function(obj)
	{
		var jsonArr=JSON.parse(obj);
		var size=jsonArr.length;
		
		var i;
		var urls="";
		for(i=0;i<size;i++)
		{
				//console.log("Title = "+jsonArr[i].title+" , href= "+jsonArr[i].href);
				urls=urls+"<a href="+jsonArr[i].href+"  class='btn btn-primary btn-md btn-style'>"+jsonArr[i].title+"</a>"; 
		}
		
		$("#container").append(urls);
	}
	
});