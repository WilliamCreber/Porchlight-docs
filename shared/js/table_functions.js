$(document).ready(function(){
	if(typeof(window.location.hash) !== 'undefined' && window.location.hash.length > 0)
	{
		var offset = $(window.location.hash).offset();
		offset = offset.top - 75;
		
		$('html,body').animate({scrollTop: offset}, 10);
	}	
});


function Component(name, path, required, attributes)
{
	this.name = name;
	this.path = path;
	this.required = required;
	this.attributes = attributes;
}
function AttributeInfo(name, id, hasDefault)
{
	this.name = name;
	this.id = id;
	this.hasDefault = hasDefault;
}

function createLink(name, path, id = null)
{
	var fullPath = path + ((id !== null) ? "#attributeTable" : "");
	
	return "<a href=\"" + fullPath + "\">" + name + "<\a>";
}

function addComponentToTable(tableId, component, status)
{
	var $table = $("#" + tableId + " > tbody");
	
	var spacer = "<td colspan=\"" + 3 + "\" class=\"vertical-spacer\"/>";
	spacer += "<td class=\"vertical-spacer horizontal-spacer\"/>";
	spacer += "<td colspan=\"" + 2 + "\" class=\"vertical-spacer\"/>";
	$table.append("<tr>" + spacer + "</tr>");
	
	component.attributes.forEach(function(attribInfo, index, array){
		var st = "<tr>";
		
		var row = "";
		
		row += "<td class=\"cp3 name lightcolor\">" + createLink(attribInfo.name, component.path, attribInfo.id) + "</td>";
		row += "<td class=\"cp3 required lightcolor\">" + attribInfo.hasDefault + "</td>";
		
		if(index == 0)
		{
			//do component info
			st += "<td rowspan=\"" + component.attributes.length + "\" class=\"cp1 lightcolor\">" + createLink(component.name, component.path) + "</td>";
			st += "<td rowspan=\"" + component.attributes.length + "\" class=\"cp1 lightcolor\">" + component.required + "</td>";
			
			var statusString = "";
			switch(status)
			{
				case "inDevelopment":
					statusString = "In Development";
					break;
				case "complete":
					statusString = "Completed";
					break;
				case "isConcept":
					statusString = "In Planning";
					break;
				case "toRemove":
					statusString = "May Remove";
					break;	
				default:
					break;
			}
			st += "<td rowspan=\"" + component.attributes.length + "\" class=\"cp1 lightcolor\"><div class=\"solo " + status + " centerDiv\">" + statusString + "</div></td>";
			
			//splitter column
			st += "<td rowspan=\"" + component.attributes.length + "\" class=\"horizontal-spacer\"></td>";
			
			st += row;
		}
		else
		{
			st += row;
		}
		
		st += "</tr>";
		
		$table.append(st);
	});
}





function addAttributeToTable(name, required, type, typedefault, merge, desc, status)
{
	var $table = $("#attributeTable > tbody");
	
	var st = "<tr>";
		
		var row = "";
		
		row += "<td class=\"cp3 name lightcolor\">" + name + "</td>";
		row += "<td class=\"cp3 type lightcolor\">" + required + "</td>";
		row += "<td class=\"cp3 type lightcolor\">" + type + "</td>";
		row += "<td class=\"cp3 required lightcolor\">" + typedefault + "</td>";
		row += "<td class=\"cp3 required lightcolor\">" + merge + "</td>";
		row += "<td class=\"cp3 desc lightcolor\">" + desc + "</td>";
		
		var statusString = "";
			switch(status)
			{
				case "inDevelopment":
					statusString = "In Development";
					break;
				case "complete":
					statusString = "Completed";
					break;
				case "isConcept":
					statusString = "In Planning";
					break;
				case "toRemove":
					statusString = "May Remove";
					break;	
				default:
					break;
			}
		
		row += "<td rowspan=\"" + 1 + "\" class=\"cp1 lightcolor\"><div class=\"solo " + status + " centerDiv\">" + statusString + "</div></td>";
		
		st += row;
		st += "</tr>";
		
		$table.append(st);
}