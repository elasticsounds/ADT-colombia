var myplayaudio=0;
var myshowtext=0;

function playaudio(myid1)
{
	var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        //if(audios[i] != e.target){
        audios[i].pause();
        //}
    }
	if(myplayaudio==0)
	{
        document.getElementById('sl-trigger1b').style.display="block";
        document.getElementById('sl-trigger1').style.display="none";
        myplayaudio=1;
		document.getElementById(myid1).play();
	}
	else
	{
        document.getElementById('sl-trigger1b').style.display="none";
        document.getElementById('sl-trigger1').style.display="block";
        myplayaudio=0;
		document.getElementById(myid1).pause();
	}
}
function changetext(myid1,myreplaceid,audioid)
{
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        audios[i].pause();
    }
	if(myshowtext==0)
	{
		myshowtext=1;
        document.getElementById('sl-book1').style.display="block";
        document.getElementById('sl-book').style.display="none";
		document.getElementById(myid1).style.display="block";
		document.getElementById(myreplaceid).style.display="none";
        myplayaudio=1;
        document.getElementById(audioid).currentTime=0;
        document.getElementById(audioid).play();
	}
	else
	{
		myshowtext=0;
        document.getElementById('sl-book1').style.display="none";
        document.getElementById('sl-book').style.display="block";
		document.getElementById(myid1).style.display="none";
		document.getElementById(myreplaceid).style.display="block";
        myplayaudio=0;
        document.getElementById(audioid).pause();
	}
}
function changetext1(myid1,myid2,myid3,myid4,myreplaceid,audioid)
{
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        audios[i].pause();
    }
    if(myshowtext==0)
    {
        myshowtext=1;
        document.getElementById('sl-book1').style.display="block";
        document.getElementById('sl-book').style.display="none";
        document.getElementById(myid1).style.display="block";
        document.getElementById(myid2).style.display="block";
        document.getElementById(myid3).style.display="block";
        document.getElementById(myid4).style.display="block";
        document.getElementById(myreplaceid).style.display="none";
        myplayaudio=1;
        document.getElementById(audioid).currentTime=0;
        document.getElementById(audioid).play();
    }
    else
    {
        myshowtext=0;
        document.getElementById('sl-book1').style.display="none";
        document.getElementById('sl-book').style.display="block";
        document.getElementById(myid1).style.display="none";
        document.getElementById(myid2).style.display="none";
        document.getElementById(myid3).style.display="none";
        document.getElementById(myid4).style.display="none";
        document.getElementById(myreplaceid).style.display="block";
        myplayaudio=0;
        document.getElementById(audioid).pause();
    }
}
function changetext17(myid1,myid2,myreplaceid,audioid)
{
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        audios[i].pause();
    }
    if(myshowtext==0)
    {
        myshowtext=1;
        document.getElementById('sl-book1').style.display="block";
        document.getElementById('sl-book').style.display="none";
        document.getElementById(myid1).style.display="block";
        document.getElementById(myid2).style.display="block";
        document.getElementById(myreplaceid).style.display="none";
        myplayaudio=1;
        document.getElementById(audioid).currentTime=0;
        document.getElementById(audioid).play();
    }
    else
    {
        myshowtext=0;
        document.getElementById('sl-book1').style.display="none";
        document.getElementById('sl-book').style.display="block";
        document.getElementById(myid1).style.display="none";
        document.getElementById(myid2).style.display="none";
        document.getElementById(myreplaceid).style.display="block";
        myplayaudio=0;
        document.getElementById(audioid).pause();
    }
}
function changetext2(myid1,myreplaceid)
{
    if(myshowtext==0)
    {
        myshowtext=1;
        document.getElementById(myid1).style.display="block";
        document.getElementById(myreplaceid).style.display="none";
    }
    else
    {
        myshowtext=0;
        document.getElementById(myid1).style.display="none";
        document.getElementById(myreplaceid).style.display="block";
    }
}
function changetext3(myid1,myreplaceid)
{
    if(myshowtext==0)
    {
        myshowtext=1;
        document.getElementById(myid1).style.display="block";
        document.getElementById(myreplaceid).style.display="none";
    }
    else
    {
        myshowtext=0;
        document.getElementById(myid1).style.display="none";
        document.getElementById(myreplaceid).style.display="block";
    }
}
function book()
{
    if(myshowtext==0)
    {
        myshowtext=1;
        document.getElementById('text3').style.display="block";
    }
    else
    {
        myshowtext=0;
        document.getElementById('text3').style.display="none";
    }

}

function playvideo9()
{
    document.getElementById('video9a').style.display="block";
    document.getElementById('video9').play();
    document.getElementById('video9').onended = function() {
        document.getElementById('video9a').style.display="none";
    };
}
