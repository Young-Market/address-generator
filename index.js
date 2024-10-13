var youngMarketConfig = {    
    logLevel: "warning",
    matcherAddress: "https://matcher.youngmarket.com",
    networkByte: "A".charCodeAt(0),
    nodeAddress: "https://node.youngmarket.com",
    requestLimit: 1000,
    requestOffset: 0,
    timeDiff: 0
}

var jsonData;

function generateAddress(){
    $('#divA,[onselect="saveAddress()"]').css("display","flex")
    test = WavesAPI.create(youngMarketConfig )
    var s = test.Seed.create()
    $("#address").text(s.address)
    $("#seeed").text(s.phrase)
    $("#pk").text(s.keyPair.privateKey)
    $("#puk").text(s.keyPair.publicKey)
    $('[onclick="generateAddress()"]').css("display","none")
    jsonData = s;
}

function saveAddress(){
          // Converte o objeto JSON em uma string
          const jsonString = JSON.stringify(jsonData);

          // Cria um Blob com o conteúdo JSON e especifica o tipo de MIME
          const blob = new Blob([jsonString], { type: 'application/json' });
    
          // Cria um link temporário para o Blob
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'address_young_market.json';
          link.click();
}
