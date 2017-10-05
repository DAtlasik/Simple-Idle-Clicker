var smallGenAmount = 0,
    smallGenPrice = 20,
    smallGenBasePrice = 20,
    smallGenCPS = 1;

var medGenAmount = 0,
    medGenPrice = 100,
    medGenBasePrice = 100,
    medGenCPS = 5;

var lrgGenAmount = 0,
    lrgGenPrice = 1000,
    lrgGenBasePrice = 1000,
    lrgGenCPS = 50;

var credit = 0,
    cps = 0,
    totCredsEarned = 0;
    
var multiplier = 10,
    smlGenMultPrice = 1000000,
    smlGenMultAmount = 0,
    medGenMultPrice = 5000000,
    medGenMultAmount = 0;
    lrgGenMultPrice = 50000000,
    lrgGenMultAmount = 0;

function update(){
    click.onclick = function() {
        credit = credit + 1;
        totCredsEarned++;
    }
    smallGenerator.onclick = function() { 
        if (credit >= smallGenPrice) {
            credit -= smallGenPrice;
            smallGenAmount++;
            smallGenPrice = smallGenBasePrice * (Math.pow(1.15, smallGenAmount));
            if (smallGenAmount % 10 === 0) {
                smallGenCPS *= 2;
            }
        }
    }
    medGenerator.onclick = function() { 
        if (credit >= medGenPrice) {
            credit -= medGenPrice;
            medGenAmount++;
            medGenPrice = medGenBasePrice * (Math.pow(1.15, medGenAmount));
            if (medGenAmount % 10 === 0) {
                medGenCPS *= 2;
            }
        }
    }
    lrgGenerator.onclick = function() { 
        if (credit >= lrgGenPrice) {
            credit -= lrgGenPrice;
            lrgGenAmount++;
            lrgGenPrice = lrgGenBasePrice * (Math.pow(1.15, lrgGenAmount));
            if (lrgGenAmount % 10 === 0) {
                lrgGenCPS *= 2;
            }
        }
    }
    smallGenMultiplier.onclick = function() {
        if (credit >= smlGenMultPrice) {
            credit -= smlGenMultPrice;
            smallGenCPS *= multiplier;
            smlGenMultPrice *= 100;
            smlGenMultAmount++;
        }
    }
    medGenMultiplier.onclick = function() {
        if (credit >= medGenMultPrice) {
            credit -= medGenMultPrice;
            medGenCPS *= multiplier;
            medGenMultPrice *= 100;
            medGenMultAmount++;
        }
    }
    lrgGenMultiplier.onclick = function() {
        if (credit >= lrgGenMultPrice) {
            credit -= lrgGenMultPrice;
            lrgGenCPS *= multiplier;
            lrgGenMultPrice *= 100;
            lrgGenMultAmount++;
        }
    }
  
    cps = smallGenCPS * smallGenAmount + medGenAmount * medGenCPS + lrgGenAmount * lrgGenCPS;
    credit += cps/5;
    totCredsEarned += cps/5;
}

function draw() {
    creds.value = credit.toFixed(0);
  
    smallGenerator.value = smallGenPrice.toFixed(0);
    smallGeneratorAmount.value = smallGenAmount.toFixed(0);
    smlGenCPSLabel.value = smallGenCPS.toFixed(0);
  
    medGenerator.value = medGenPrice.toFixed(0);
    medGeneratorAmount.value = medGenAmount.toFixed(0);
    medGenCPSLabel.value = medGenCPS.toFixed(0);
  
    lrgGenerator.value = lrgGenPrice.toFixed(0);
    lrgGeneratorAmount.value = lrgGenAmount.toFixed(0);
    lrgGenCPSLabel.value = lrgGenCPS.toFixed(0);
  
    creditPerSecond.value = cps.toFixed(0);
    totalCreditsEarned.value = totCredsEarned.toFixed(0);
    
    smallGenMultiplier.value = smlGenMultPrice/1000000 + "mln";
    smlGenUpgrPurch.value = smlGenMultAmount.toFixed(0);
    
    medGenMultiplier.value = medGenMultPrice/1000000 + "mln";
    medGenUpgrPurch.value = medGenMultAmount.toFixed(0);

    lrgGenMultiplier.value = lrgGenMultPrice/1000000 + "mln";
    lrgGenUpgrPurch.value = lrgGenMultAmount.toFixed(0);

}
  
var mainloop = function() {update(), draw()}
setInterval(mainloop, 200)
