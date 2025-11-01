class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('#content')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto() {
        //código
    }

    addProdutoCarrinho() {
        //código
    }

}

export default new ProdutosPage()