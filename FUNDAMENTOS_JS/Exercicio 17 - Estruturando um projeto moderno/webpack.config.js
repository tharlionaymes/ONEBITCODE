module.exports = { // Exporta a configuração do webpack
    entry: { // Define os pontos de entrada da aplicação
        index: "./src/index.js" // O ponto de entrada é o arquivo index.js localizado no diretório src
    },
    mode: "development", // Define o modo de construção como desenvolvimento
    module: { // Define as regras para processar diferentes tipos de arquivos durante a construção
        rules: [ // Define as regras de processamento dos arquivos
            {
                test: /\.css$/, // Aplica essa regra a arquivos CSS
                use: ["style-loader", "css-loader"] // Utiliza os loaders style-loader e css-loader para processar arquivos CSS
            }, 
            { // Segunda regra
                test: /\.js$/, // Aplica essa regra a arquivos JavaScript    
                use: ["babel-loader"] // Utiliza o babel-loader para transpilar arquivos JavaScript
            }
        ]
    },
    output: { // Define as opções de saída
        filename: "[name].min.js" // Define o nome do arquivo de saída como [nome].min.js
    }
}