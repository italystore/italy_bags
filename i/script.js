function set_value(object,form,new_value,skip){
	if( document.forms[form].elements[object].value == skip)
    	document.forms[form].elements[object].value = new_value;
}
function clean_input(id,skip,set){
	if( document.getElementById(id).value == skip)
		document.getElementById(id).value = set;
}


function confirmation(link) {
	var answer = confirm("Вы уверены?")
	if (answer)
		window.location = link;
}
function str_replace (search, replace, subject, count) {
    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
            f = [].concat(search),
            r = [].concat(replace),
            s = subject,
            ra = r instanceof Array, sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }
 
    for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {
            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}
        }
    }
    return sa ? s : s[0];
}


 //v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}



$(document).ready(function() {
	//$(".lightbox").lightBox({fixedNavigation:true});
 
	

	$(".hover-switch").hover(function () {
		$( ".hover-switch-child-" + $(this).attr("id") ).slideDown(1);
	},function () {
		$( ".hover-switch-child-" + $(this).attr("id") ).slideUp(1);
	});
	
    $(".oc").click(function () {
		$( "#co" + $(this).attr("id") ).slideToggle(10);
	});	
    $(".oc_close").click(function () {
		$( "#c" + $(this).attr("id") ).slideUp();
	});

	$("#forbidden-category").click(function () {
		$( "#forbidden-category").hide();
	});	
	$("#added-to-basket").click(function () {
		$( "#added-to-basket").hide();
	});

	$("#added-to-basket-not-in-stock").click(function () {
		$( "#added-to-basket-not-in-stock").hide();
	});	
	
	$(".category").click(function () {
		$( "#brands" + $(this).attr("id") ).slideToggle();
	});	
	
	$("#infolinks a").click(function () {
		$( "#tflash" ).remove();
		$( "#bigimage" ).load( "/image.php?image=" + $(this).attr("id") + "&id=" + $(this).attr("class") );
	});	

	$(".tohover").hover(function () {
		$("#popup" + $(this).attr("id")).show();
	}, function () {
		$("#popup" + $(this).attr("id")).hide();
	});
	$(".tohover").mousemove(function(e){
		e.pageY=e.pageY+4;
		e.pageX=e.pageX+4;
		$("#popup" + $(this).attr("id")).css( {"top" : e.pageY } );
		$("#popup" + $(this).attr("id")).css( {"left" : e.pageX } );
	});

	
	$(".getit").each(function(index) {
		$(this).load("/hideit.php", function() {
			$(this).attr("href","mailto:" + $(this).text() );
		});
	});		
}); 

