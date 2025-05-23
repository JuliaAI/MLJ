##  Contributing to the MLJ Machine Learning Project
<p>
Contributions to MLJ are most welcome. Queries can be made through
issues or the Julia [slack channel](https://julialang.org/slack/), #mlj. 
</p>
- [Roadmap](https://github.com/JuliaAI/MLJ.jl/blob/dev/ROADMAP.md)
- [Code Organization Graph](https://github.com/JuliaAI/MLJ.jl/blob/dev/ORGANIZATION.md)
- Issues: Currently issues are split between [MLJissues](https://github.com/JuliaAI/MLJ.jl/issues) and issues in all other repositories, collected in [this GitHub Project](https://github.com/orgs/JuliaAI/projects/1).




#### Conventions

<div class="md-block-cont">
Most larger MLJ repositories follow
[this](https://nvie.com/posts/a-successful-git-branching-model/) git
work-flow. In all cases please make **all pull requests to the default
branch** of the appropriate repo (branch appearing on the repo's
landing page). This is `dev` for larger repos, and `master`
otherwise. This includes changes to documentation.
<br><br>
Contributors are kindly requested to adhere to the
[Blue](https://github.com/invenia/BlueStyle) style guide, with line
widths capped at 92 characters.

</div>


#### Brief Design Overview

<div class="md-block-cont">
MLJ has a basement level *model* interface, which must be implemented
for each new learning algorithm. Formally, each model is a `mutable
struct` storing hyperparameters and the implementer defines
model-dispatched `fit` and `predict`/`transform` methods; for details,
see [here](https://github.com/JuliaAI/MLJ.jl/blob/dev/docs/src/adding_models_for_general_use.md). The general
user interacts using *machines* which bind models with data and have
an internal state reflecting the outcomes of applying `fit!` and
`predict`/`transform` methods on them. The model interface is pure
"functional"; the machine interface more "object-oriented".
<br><br>
A generalization of machine, called a *nodal* machine, is a key
element of *learning networks* which combine several models together,
and form the basis for specifying new composite model types. See
[here](https://JuliaAI.github.io/MLJ.jl/dev/composing_models/)
for more on these.
<br><br>
MLJ code is now spread over [multiple repositories](https://github.com/JuliaAI/MLJ.jl/blob/dev/ORGANIZATION.md).

</div>




### Bucket List
<p>
Developers that can demonstrate prior experience in Julia and machine learning are welcome to consider working on one of [these](https://github.com/JuliaLang/www.julialang.org/blob/main/jsoc/gsoc/MLJ.md) larger projects.
</p>
