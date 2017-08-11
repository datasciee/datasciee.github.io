# Eesti andmeteadus

[datasci.ee](http://datasci.ee) veebilehe lähtekood. Leht on ehitatud [Jekyll](https://jekyllrb.com)i abil; sisu on kirjutatud Markdownis ja asub failis [index.md](https://github.com/datasciee/datasciee.github.io/blob/master/index.md). Repot haldab [@taivop](https://github.com/taivop).

## Panustamine
**Blogipostituse** lisamiseks on kaks varianti.

1. Kirjuta see [markdownis](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) valmis ja [saada Taivole meilile](mailto:taivo@pungas.ee).
2. Tee *pull request*, kus:
	* Lisad `_posts` kausta uue faili kujul `YYYY-MM-DD-postituse-pealkiri.md`. Võta aluseks [see postitus](/_posts/2017-07-05-communicating-estonian-data-science.md).
	* Lisad end [`config.yml`](/_config.yml) lõppu autoriks (vaata näidet failis).



**Muu sisu** muutmiseks a) loo uus [*issue*](https://github.com/datasciee/datasciee.github.io/issues/new) VÕI b) muuda faili [index.md](https://github.com/datasciee/datasciee.github.io/blob/master/index.md) (kasvõi otse GitHubis) ja tee *pull request*.

* Projektiideed asuvad kaustas `_projects`. Uue projekti lisamiseks loo sinna eelmiste eeskujul uus fail.
* Andmeteaduse sõnastik asub failis `masinoppe-sonastik.md`.


**Lehe** muutmiseks:

* [Installi Jekyll](https://jekyllrb.com/docs/quickstart/).
* Klooni käesolev repo omale arvutisse: `git clone https://github.com/datasciee/datasciee.github.io`
* Mine repo kausta: `cd datasciee.github.io`
* Lehe lokaalselt vaatamiseks jooksuta `bundle exec jekyll serve` ja mine brauseriga kuvatud aadressile (vaikimisi [localhost:4000](http://localhost:4000)).
* Lisa oma nimi [panustajate](https://github.com/datasciee/datasciee.github.io/blob/master/index.md#panustajad) alla ja saada *pull request*.
