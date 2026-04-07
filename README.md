# Fast Logistics

Site institucional estatico da Fast Logistics.

## Estrutura

- `index.html`: pagina inicial
- `solucoes.html`: pagina de solucoes
- `operacoes.html`: pagina com acesso aos modelos operacionais
- `vantagens.html`: pagina de vantagens
- `contato.html`: pagina de contato
- `operacao-last-mile.html`: operacao last mile
- `operacao-centros.html`: operacao entre centros
- `operacao-dedicada.html`: operacao dedicada
- `styles.css`: estilos globais
- `script.js`: animacoes e interacoes

## Publicacao automatica com GitHub + Netlify

### 1. Criar um repositorio no GitHub

Crie um repositorio novo no GitHub, por exemplo:

`fast-logistics-site`

### 2. Enviar estes arquivos para o GitHub

Envie a pasta inteira do projeto para esse repositorio.

### 3. Conectar o GitHub ao Netlify

No Netlify:

1. Abra `Add new site`
2. Escolha `Import an existing project`
3. Escolha `GitHub`
4. Selecione o repositorio do site
5. Mantenha o publish directory como `.`
6. Finalize o deploy

### 4. Como atualizar depois

Depois disso, sempre que o repositorio receber alteracoes, o Netlify atualiza o site automaticamente.

## Observacao

O arquivo `netlify.toml` ja esta preparado para publicar este projeto estatico.
