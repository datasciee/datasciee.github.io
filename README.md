# Eesti andmeteadus

[datasci.ee](http://datasci.ee) veebilehe lähtekood. Leht on ehitatud [Jekyll](https://jekyllrb.com)i abil; sisu on kirjutatud Markdownis ja asub failis [index.md](https://github.com/datasciee/datasciee.github.io/blob/master/index.md). Repot haldab [@taivop](https://github.com/taivop).

## Panustamine
**Blogipostituse** lisamiseks on kaks varianti.

1. Kirjuta see [markdownis]() valmis ja saada Taivole [meilile](mailto:taivo@pungas.ee).
2. Tee *pull request*, kus:
	a. Lisad `_posts` kausta uue faili kujul `YYYY-MM-DD-postituse-pealkiri.md`. Võta aluseks [see postitus](/_posts/2017-07-05-communicating-estonian-data-science.md).
	b. Lisad end [`config.yml`](/_config.yml) lõppu autoriks (vaata näidet failis).



**Sisu** muutmiseks loo uus [*issue*](https://github.com/datasciee/datasciee.github.io/issues/new) või muuda faili [index.md](https://github.com/datasciee/datasciee.github.io/blob/master/index.md) (kasvõi otse GitHubis).

* Projektiideed asuvad kaustas `_projects`. Uue projekti lisamiseks loo sinna eelmiste eeskujul uus fail.
* Andmeteaduse sõnastik asub failis `masinoppe-sonastik.md`.


**Lehe** muutmiseks:

* Installi [Jekyll](https://jekyllrb.com/docs/quickstart/).
* Lehe lokaalselt vaatamiseks jooksuta `bundle exec jekyll serve` ja mine brauseriga kuvatud aadressile (vaikimisi [localhost:4000](localhost:4000)).
* Lisa oma nimi [panustajate](https://github.com/datasciee/datasciee.github.io/blob/master/index.md#panustajad) alla ja saada *pull request*.
