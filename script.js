// Declaring vars
var query = null
var gAmount = ''
var gRate = ''
var gYear = ''
var computedDiv = undefined
var year = null
var currentYear = null
window.addEventListener('DOMContentLoaded', event => {
    // Expels redundancy. Assigns after DOM contents have loaded
     query = selector =>  document.querySelector( '#'+selector ) 

     computedDiv = query( 'result' ) 
     computedDiv.style.display = 'none' // Hide text initially

     gRate = 3.5 // initial value of range
     
     currentYear = new Date().getFullYear()
     year = query( 'year-text' ) 

     

});

    

function compute()
{
    principalTag = query("principal");
    
    principal = principalTag.value
    if ( principal==='' )
    {
        alert( 'Please specify an amount' )
        return
    } else if ( principal<=0 ) {
        
        alert( "Enter a positive number" )

        principalTag.focus()
        return 
    }

    computed = query( 'result' )
    finalAmountSelected = query( 'amount-text' )
    finalAmountSelected.innerHTML = principal
    finalRating = query( 'rateing-my-text' )
    computedAmount = query( 'recieved-text' )

    console.log( finalRating )
    total = (principal/100)*gRate
    years = query( 'years' ).value

    if ( years==='' )
    {
        alert( 'Please specify year(s)' )
        return
    }

    interest = years * total // interest var for interest
    computedAmount.innerHTML =  interest
    //computed.innerHTML = p

    computedDiv.style.display = 'block'
    finalRating.innerHTML = gRate+'%'

    year.innerHTML = currentYear+ parseInt( years ) // Set current year


}


function getRange( value )
{
    rate = query( 'rate-text' )
    rate.innerHTML = (value)+'%'
    gRate = (value)
}

/** 


**/
        