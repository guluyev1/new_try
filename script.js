       console.log("Hello Mohit");
       
        function darkThemeFunc(){
            document.getElementById('light-theme-span').style.backgroundColor="#222";
            document.getElementById("light-theme").style.color ="#fff";

            document.getElementById('dark-theme-span').style.backgroundColor="#0c2556";
            document.getElementById('dark-theme').style.color="#fff";

            document.getElementById("x-markID").style.color="#f9fbfe";
            document.getElementById("bodyTag").style.backgroundColor="#222";
            document.getElementById("right-Nav").style.backgroundColor="#181818";
            document.getElementById("footId").style.backgroundColor="#181818";
            document.getElementById("left-Nav").style.backgroundColor="#181818";
            document.getElementById("paraFootId").style.color="#fff";
            document.getElementById("right-logo-name").style.color="#fff";
            document.getElementById("right-hamburger").style.backgroundColor="#222";
            document.getElementById("right-sm-nav").style.backgroundColor="#181818";
            
            /*table theme*/
            let tableClsses = document.getElementsByClassName('table-containers');
            for(let i=0; i<tableClsses.length; i++){
				tableClsses[i].style.backgroundColor="#181818";
				tableClsses[i].style.color="#fff";
			}
			
			/*table Data color theme*/
            let tableDataCell = document.getElementsByClassName('theme-txt-tableData');
            for(let i=0; i<tableDataCell.length; i++){
				tableDataCell[i].style.color="#fff";
			}
						 
			 
			 /*table headings theme*/
            let tableHeading = document.getElementsByClassName('tableHeading-txt');
            for(let i=0; i<tableHeading.length; i++){
				tableHeading[i].style.color="#fff";
			}

            let ListMenuIcons = document.getElementsByClassName("menu-link-txt");               
                for(let i=0; i<ListMenuIcons.length; i++){
                    ListMenuIcons[i].style.color="#fff";
                }
        }

        function lightThemeFunc(){
            document.getElementById('light-theme-span').style.backgroundColor="#0c2556";
            document.getElementById("light-theme").style.color ="#fff";

            document.getElementById('dark-theme-span').style.backgroundColor="#fff";
            document.getElementById('dark-theme').style.color="#0c2556";

            document.getElementById("x-markID").style.color="#181818";
            document.getElementById("bodyTag").style.backgroundColor="";
            document.getElementById("right-Nav").style.backgroundColor="";
            document.getElementById("footId").style.backgroundColor="";
            document.getElementById("left-Nav").style.backgroundColor="";
            document.getElementById("paraFootId").style.color="";
            document.getElementById("right-logo-name").style.color="";
            document.getElementById("right-hamburger").style.backgroundColor="";
            document.getElementById("right-sm-nav").style.backgroundColor="";
            
            
            /*table theme*/
            let tableClsses = document.getElementsByClassName('table-containers');
            for(let i=0; i<tableClsses.length; i++){
				tableClsses[i].style.backgroundColor="";
				tableClsses[i].style.color="";
			}
			
			/*table Data color theme*/
            let tableDataCell = document.getElementsByClassName('theme-txt-tableData');
            for(let i=0; i<tableDataCell.length; i++){
				tableDataCell[i].style.color="";
			}
						 
			 
			 /*table headings theme*/
            let tableHeading = document.getElementsByClassName('tableHeading-txt');
            for(let i=0; i<tableHeading.length; i++){
				tableHeading[i].style.color="";
			}
            
        }



        function slideMenuFunc(){
            document.getElementById('left-Nav').style.left="-270px";
        }

        function slideMenuShowFunc(){
            document.getElementById("right-Nav").classList.remove("rightNav_WidthFull");
            document.getElementById('left-Nav').classList.remove("lefNavFivePerc");
            let element = document.getElementsByClassName("menu-link-txt");
            for(let i=0; i<element.length; i++){
                element[i].classList.remove("hide");
            }
            document.getElementById('left-Nav').style.left="0px";   
        }


        function slideMenuShowFuncOnBig(){
            document.getElementById("top-logo-txt").classList.toggle("hide"); 
            document.getElementById('left-Nav').classList.toggle("lefNavFivePerc"); 
            document.getElementById('right-Content').classList.toggle("rightContFivePerc");
            document.getElementById("right-Nav").classList.toggle("rightNav_WidthFull");
            document.getElementById("footId").classList.toggle("footMr50Pixel");

            let element = document.getElementsByClassName("menu-link-txt");
            for(let i=0; i<element.length; i++){
                element[i].classList.toggle("hide");
            }

        }


        function rightSmNavFunc(){
            document.getElementById("right-sm-nav").classList.toggle("paddingY-35px");
        }


        // hover menu-icons
        function leftMenuHoverWhite(){
            let ListHover = document.getElementsByClassName("menu-icons");
            for(let i=0; i<ListHover.length; i++){
                ListHover[i].classList.toggle("textWhite");
            }
        }

        // menu-Link-Clicking Functionality
        function rightMenuArrowToggle(){
            let rightArrow = document.getElementsByClassName("rightArrow");
            for(let i=0; i<rightArrow.length; i++){
                rightArrow[i].classList.toggle("rotate90Deg");
            }
        } 

        
 		/*Clients Side Menu Drop Down Functionality*/
 		document.getElementById("clientsDropDown").addEventListener("click",function(){
			 /*off All*/
			 document.getElementById("AccountsSubMenu").classList.remove("height128px");
			 document.getElementById("QuotesSubMenu").classList.remove("height128px");
			 document.getElementById("InvoiceSubMenu").classList.remove("height128px");
			 
			 document.getElementById("rightArrowClients").classList.toggle("rotate90Deg");
			 document.getElementById("clientsSubMenu").classList.toggle("height96px");
		 });
		 
		 /*Accounts Side Menu Drop Down Functionality*/
 		document.getElementById("accountsDropDown").addEventListener("click",function(){
			  /*off All*/
			  document.getElementById("clientsSubMenu").classList.remove("height96px");
			  document.getElementById("QuotesSubMenu").classList.remove("height128px");
			  document.getElementById("InvoiceSubMenu").classList.remove("height128px");
			  
			 document.getElementById("rightArrowAccounts").classList.toggle("rotate90Deg");
			 document.getElementById("AccountsSubMenu").classList.toggle("height128px");
		 });
		 
		 /*Quotes Side Menu Drop Down Functionality*/
 		document.getElementById("quotesDropDown").addEventListener("click",function(){
			  /*off All*/
			  document.getElementById("clientsSubMenu").classList.remove("height96px");
			  document.getElementById("AccountsSubMenu").classList.remove("height128px");
			  document.getElementById("InvoiceSubMenu").classList.remove("height128px");
			  
			 document.getElementById("rightArrowQuotes").classList.toggle("rotate90Deg");
			 document.getElementById("QuotesSubMenu").classList.toggle("height128px");
		 });
		 
		 /*Invoice Side Menu Drop Down Functionality*/
 		document.getElementById("invoiceDropDown").addEventListener("click",function(){
			  /*off All*/
			  document.getElementById("clientsSubMenu").classList.remove("height96px");
			  document.getElementById("AccountsSubMenu").classList.remove("height128px");
			  document.getElementById("QuotesSubMenu").classList.remove("height128px");			  
			  
			 document.getElementById("rightArrowInvoice").classList.toggle("rotate90Deg");
			 document.getElementById("InvoiceSubMenu").classList.toggle("height128px");
		 });
		 
 
 
 
 
 
        