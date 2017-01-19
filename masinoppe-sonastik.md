---
layout: page
title: Närvivõrkude ja masinõppe sõnastik
description: Inglise-eesti vasted levinud närvivõrkude ja masinõppe terminitele.
permalink: /masinoppe-sonastik/
---

Allpool on teemade kaupa toodud eestikeelsed vasted erinevatele masinõppe terminitele. Tegu on tööversiooniga; arutamiseks ja panustamiseks lisa kommentaar [siin](https://goo.gl/KYIEo1).


**Konsensus** näitab 9 eksperdi pakutust enimlevinud vastet. Ekspertidena andsid arvamuse [Tambet Matiisen](https://github.com/tambetm), Kairit Sirts, Mare Koit, [Tanel Pärnamaa](http://github.com/tanelp), Toomas Kirt, Sven Laur, Jüri Lember ([loengukonspektist](http://www-1.ms.ut.ee/ained/Tehis%f5pe/tehisope8.pdf)) ja [Konstantin Tretjakov](https://github.com/konstantint). Mõnele terminile ei pakkunud eksperdid ühtki vastet; sel juhul on vaste Tambet Matiiseni pakutud.

**IT sõnastik** näitab [EKI IT terministandardi sõnastiku](http://www.eki.ee/dict/its/) vasteid.

Põhiosa terminite kogumise tööst tegi ära [Tambet Matiisen](https://github.com/tambetm). Lisaks temale ja ülalnimetatud ekspertidele panustas kommentaaridega [Kristjan Korjus](https://github.com/kristjankorjus/).

### Sisukord
{:.no_toc}

* Siia tuleb sisukord (ja see lause kustutatakse ära).
{:toc}


### General / Üldine

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| machine learning                                 | masinõpe                                           | tehisõpe, automaatõpe                    |
| statistical learning                             | statistiline õpe, tehisõpe                         |                                          |
| supervised learning                              | juhendatud õpe, juhendamisega õpe                  | valvega õppimine                         |
| unsupervised learning                            | juhendamata õpe, juhendamiseta õpe                 | valveta õppimine                         |
| reinforcement learning                           | stiimulõpe, kinnitusega õpe                        | kinnitusega õppimine                     |
| neural network                                   | närvivõrk, neurovõrk                               | neurovõrk, närvivõrk                     |
| artificial neural network                        | tehisnärvivõrk                                     | tehis-närvivõrk                          |
| deep neural network                              | sügav närvivõrk                                    |                                          |
| deep learning                                    | sügavad närvivõrgud, sügavõpe                      |                                          |
| transfer learning                                | siirdeõpe, ülekandeõpe                             |                                          |
| representation learning                          | esituse õpe                                        |                                          |
| ensemble learning                                | ansambelõpe, komiteeõpe                            |                                          |
| training                                         | treenimine                                         |                                          |
| testing                                          | testimine                                          |                                          |
| validation                                       | valideerimine                                      |                                          |


### Networks / Võrgud

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| perceptron                                       | pertseptron, tajur                                 | ühekihiline pertseptron, lihtpertseptron |
| multi-layer perceptron                           | mitmekihiline närvivõrk, mitmekihiline pertseptron | mitmekihiline pertseptron                |
| feed-forward network                             | pärilevivõrk                                       | tsükliteta võrk, pärilevivõrk            |
| convolutional network                            | konvolutsiooniline võrk                            | ahendus, konvolutsioon                   |
| recurrent network                                | rekurrentne võrk                                   | rekurrentne võrk                         |
| Hopfield network                                 | Hopfieldi võrk                                     |                                          |
| Boltzmann machine                                | Boltzmanni masin                                   |                                          |
| restricted Boltzmann machine                     | piirangutega Boltzmanni masin                      |                                          |
| autoencoder                                      | autokooder                                         |                                          |
| self-organizing map                              | iseorganiseeruv kaart, Kohoneni võrk               |                                          |
| liquid state machine                             | voolav olekuvõrk?                                  |                                          |
| echo state network                               | kajaolekuvõrk?                                     |                                          |
| ensemble (of models)                             | (mudelite) ansambel, (mudelite) komitee            |                                          |

### Network components / Võrgu osad

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| neuron                                           | neuron                                             | neuron                                   |
| node                                             | (võrgu)sõlm                                        | sõlm                                     |
| input node                                       | sisendsõlm                                         |                                          |
| output node                                      | väljundsõlm                                        |                                          |
| hidden node                                      | peitsõlm, peidetud sõlm, varjatud sõlm             |                                          |
| weights                                          | kaalud                                             | kaalud                                   |
| biases                                           | vabaliikmed                                        | nihe                                     |
| parameters                                       | (võrgu) parameetrid                                | parameetrid                              |
| features                                         | tunnused                                           | tunnused, karakteristikud                |
| (node) activations                               | (sõlmede) aktivatsioonid, (sõlmede) väärtused      | aktiveerimine                            |
| representation                                   | esitus                                             | esitus                                   |
| distributed representation                       | hajusesitus                                        |                                          |
| (representation) sparsity                        | (esituse) hõredus                                  |                                          |

### Layers / Kihid

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| input layer                                      | sisendkiht                                         |                                          |
| output layer                                     | väljundkiht                                        |                                          |
| hidden layer                                     | peitkiht, peidetud kiht, varjatud kiht             | nähtamatu kiht, vahekiht                 |
| convolutional layer                              | konvolutsiooniline kiht                            | ahendus, konvolutsioon                   |
| pooling / subsampling layer                      | ahenduskiht                                        | subsampling = diskreetimine              |
| fully connected layer                            | täissidus kiht, täielikult ühendatud kiht          | sidus, täissidus                         |
| softmax layer                                    | softmax-kiht                                       |                                          |

### Layer parameters / Kihtide parameetrid

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| padding                                          | ääris                                              |                                          |
| channels                                         | kanalid                                            |                                          |
| filter, number of filters                        | filter, filtrite arv                               | filter                                   |
| (kernel / convolution) size                      | (konvolutsiooni) suurus                            | ahendustuum                              |
| stride                                           | (konvolutsiooni) samm                              |                                          |
| feature map                                      | tunnuskaart, tunnuste kaart                        |                                          |

### Activation functions / Aktivatsioonifunktsioonid

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| activation function                              | aktivatsioonifunktsioon                            | aktivatsioonifunktsioon                  |
| threshold function                               | lävefunktsioon                                     |                                          |
| sigmoid function                                 | sigmoidfunktsioon                                  |                                          |
| tanh function                                    | hüperboolne tangensfunktsioon, tanh-funktsioon     |                                          |
| rectified linear unit/function                   | mittenegatiivne lineaarfunktsioon                  |                                          |

### Objective functions / Eesmärkfunktsioonid

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| objective function                               | eesmärkfunktsioon                                  |                                          |
| cost (function)                                  | kulu(funktsioon)                                   |                                          |
| loss (function)                                  | kahju(funktsioon), kao(funktsioon)                 | kahju                                    |
| hinge loss                                       | kärbitud lineaarne kaofunktsioon                   |                                          |
| cross-entropy loss                               | ristentroopiakahju                                 |                                          |
| Euclidean loss / squared loss                    | Eukleidiline kahju, ruutkahju                      |                                          |

### Optimization / Optimeerimine

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| feed-forward (propagation)                       | pärilevi                                           | pärilevi                                 |
| back-propagation                                 | tagasilevi                                         | tagasilevi                               |
| batch (training)                                 | plokk, plokktreening                               | pakk, saritreening                       |
| mini-batch (training)                            | miniplokk, miniplokktreening                       |                                          |
| full-batch (training)                            | täisandmestiktreening                              |                                          |
| gradient                                         | gradient                                           | gradient                                 |
| gradient descent, steepest descent method        | gradientlaskumine, järsima laskumise meetod        |                                          |
| stochastic gradient descent                      | stohhastiline gradientlaskumine                    |                                          |
| learning rate                                    | õpisamm                                            |                                          |
| momentum                                         | inerts, inertsitegur                               |                                          |
| regularization                                   | regulariseerimine                                  |                                          |
| penalty term                                     | karistusliige                                      |                                          |
| L1 regularization                                | L1-regularisatsioon, L1-regulariseerimine          |                                          |
| lasso regularization                             | lassoregularisatsioon                              |                                          |
| L2 regularization                                | L2-regularisatsioon, L2-regulariseerimine          |                                          |
| ridge regularization?                            | kantregularisatsioon                               |                                          |
| weight decay                                     | kaalude kahandamine                                |                                          |
| sparsity target                                  | hõreduseesmärk                                     |                                          |
| dropout                                          | dropout-meetod, väljajätumeetod                    | drop-out=kaobitt                         |
| iteration                                        | iteratsioon                                        | iteration                                |
| epoch                                            | epohh                                              | epohh                                    |
| overtraining                                     | ületreening, ületreenimine                         |                                          |
| early stop                                       | varane lõpetamine                                  |                                          |
| overfitting                                      | ülesobitus, ülesobitamine                          |                                          |
| underfitting                                     | alasobitus, alasobitamine                          |                                          |
| boosting                                         | võimendamine                                       |                                          |

### Datasets / Andmestikud

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| dataset                                          | andmestik                                          |                                          |
| training set                                     | treeningandmestik                                  |                                          |
| validation set                                   | valideerimisandmestik                              |                                          |
| test set                                         | testandmestik                                      |                                          |
| dimensions                                       | dimensioonid, mõõtmed                              | mõõted?                                  |
| class                                            | klass                                              |                                          |
| label                                            | märgend, märgendama                                |                                          |
| data augmentation                                | andmete rikastamine                                |                                          |
| bag of words                                     | sõnahulk                                           |                                          |
{:.termtable}

### Classification / Klassifitseerimine

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| classification                                   | klassifitseerimine                                 |                                          |
| classifier                                       | klassifitseerija                                   |                                          |
| classification error                             | klassifitseerimisviga                              |                                          |
| precision                                        | täpsus                                             | täpsus                                   |
| recall                                           | saagis                                             |                                          |
| accuracy                                         | õigsus                                             | täpsus, õigsus                           |

### Machine learning / Masinõpe

{: .term-table .table .table-striped .sortable}
| Inglise keeles                                   | Konsensus                                          | IT sõnastik                              |
|--------------------------------------------------|----------------------------------------------------|------------------------------------------|
| random forest                                    | otsustusmets                                       |                                          |
| support vector machine                           | tugivektorklassifitseerija                         |                                          |
| logistic regression                              | logistiline regressioon                            |                                          |
| ridge regression                                 | kantregressioon                                    |                                          |
| elastic net                                      |                                                    |                                          |
| dimensionality reduction                         |                                                    |                                          |
| pipeline                                         |                                                    |                                          |
| feature extraction                               |                                                    |                                          |
| feature selection                                |                                                    |                                          |
| kernel                                           |                                                    |                                          |
| topic modelling                                  | teemade modelleerimine                             |                                          |
| non-negative matrix factorization                | mittenegatiivne maatriksi faktoriseerimine         |                                          |