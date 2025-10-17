# Fernanda Mascheti — Blog

Projeto em **Next.js** com listagem de posts, categorias, paginação e busca.

- **Deploy:** https://fernanda-mascheti.vercel.app

## Rodando localmente

```bash
yarn install
yarn dev
```

> http://localhost:3000

<br>

## Observações importantes

### Sobra a busca

existe campo e debounce, mas ainda não faz requisição real.

**Motivo:** A API fornecida não tem documentação de query de pesquisa.

### A API não está com CORS habilitado, precisa liberar no backend ou usar proxy.

Durante o desenvolvimento, foi utilizado um bypass via extensão de navegador.

**`Para funcionamento correto em produção, será necessário habilitar CORS no backend`**.

API: hook usePosts `search`. Só falta o backend aceitar.

### Layout dos cards de Posts

Em telas muito grandes, expandir os cards dos posts até as laterais causava distorções visuais. Por isso, defini um limite de largura centralizado. No tamanho do protótipo do Figma, o layout permanece idêntico ao original.

### Roadmap

- Definir query de busca no backend.
- Habilitar CORS ou criar proxy serverless.
