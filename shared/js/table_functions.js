function Attribute(name, type, typedefault, required, desc){
	this.name = name;
	this.type = type;
	this.typedefault = typedefault;
	this.required = required;
	this.desc = desc;
}

function addComponentToTable(component, attributes, status){
	var $table = $(".componentTable > tbody");
	
	$table.append("<tr><td colspan=\"7\" style=\"height:5px;\"/></tr>");
	
	attributes.forEach(function(attrib, index, array){
		var st = "<tr>";
		
		var row = "";
		
		row += "<td class=\"cp3 name lightcolor\">" + attrib.name + "</td>";
		row += "<td class=\"cp3 type lightcolor\">" + attrib.type + "</td>";
		row += "<td class=\"cp3 type lightcolor\">" + attrib.typedefault + "</td>";
		row += "<td class=\"cp3 required lightcolor\">" + attrib.required + "</td>";
		row += "<td class=\"cp3 desc lightcolor\">" + attrib.desc + "</td>";
		
		if(index == 0)
		{
			st += "<td rowspan=\"2\" class=\"cp1 darkercolor\">" + component + "</td>";
			st += row;
			st += "<td rowspan=\"2\" class=\"cp1 lightcolor\"><div class=\"solo inDevelopment centerDiv\">In Development</div></td>";
		}
		else
		{
			st += row;
		}
		st += "</tr>";
		
		$table.append(st);
	});
	
}