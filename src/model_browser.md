# Model Browser

Models may appear under multiple categories.

Below an *encoder* is any transformer that does not fall under
another category, such as "Missing Value Imputation" or "Dimension Reduction".

### Categories
[Regression](@ref)  |  [Classification](@ref)  |  [Outlier Detection](@ref)  |  [Iterative Models](@ref)  |  [Ensemble Models](@ref)  |  [Clustering](@ref)  |  [Dimension Reduction](@ref)  |  [Bayesian Models](@ref)  |  [Class Imbalance](@ref)  |  [Encoders](@ref)  |  [Static Models](@ref)  |  [Missing Value Imputation](@ref)  |  [Distribution Fitter](@ref)  |  [Text Analysis](@ref)  |  [Image Processing](@ref)

##  Regression
- [ARDRegressor (MLJScikitLearnInterface.jl)](@ref ARDRegressor_MLJScikitLearnInterface)

- [AdaBoostRegressor (MLJScikitLearnInterface.jl)](@ref AdaBoostRegressor_MLJScikitLearnInterface)

- [BaggingRegressor (MLJScikitLearnInterface.jl)](@ref BaggingRegressor_MLJScikitLearnInterface)

- [BayesianRidgeRegressor (MLJScikitLearnInterface.jl)](@ref BayesianRidgeRegressor_MLJScikitLearnInterface)

- [CatBoostRegressor (CatBoost.jl)](@ref CatBoostRegressor_CatBoost)

- [ConstantRegressor (MLJModels.jl)](@ref ConstantRegressor_MLJModels)

- [DecisionTreeRegressor (BetaML.jl)](@ref DecisionTreeRegressor_BetaML)

- [DecisionTreeRegressor (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref DecisionTreeRegressor_DecisionTree)

- [DeterministicConstantRegressor (MLJModels.jl)](@ref DeterministicConstantRegressor_MLJModels)

- [DummyRegressor (MLJScikitLearnInterface.jl)](@ref DummyRegressor_MLJScikitLearnInterface)

- [ElasticNetCVRegressor (MLJScikitLearnInterface.jl)](@ref ElasticNetCVRegressor_MLJScikitLearnInterface)

- [ElasticNetRegressor (MLJLinearModels.jl)](@ref ElasticNetRegressor_MLJLinearModels)

- [ElasticNetRegressor (MLJScikitLearnInterface.jl)](@ref ElasticNetRegressor_MLJScikitLearnInterface)

- [EpsilonSVR (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref EpsilonSVR_LIBSVM)

- [EvoLinearRegressor (EvoLinear.jl)](@ref EvoLinearRegressor_EvoLinear)

- [EvoSplineRegressor (EvoLinear.jl)](@ref EvoSplineRegressor_EvoLinear)

- [EvoTreeCount (EvoTrees.jl)](@ref EvoTreeCount_EvoTrees)

- [EvoTreeGaussian (EvoTrees.jl)](@ref EvoTreeGaussian_EvoTrees)

- [EvoTreeMLE (EvoTrees.jl)](@ref EvoTreeMLE_EvoTrees)

- [EvoTreeRegressor (EvoTrees.jl)](@ref EvoTreeRegressor_EvoTrees)

- [ExtraTreesRegressor (MLJScikitLearnInterface.jl)](@ref ExtraTreesRegressor_MLJScikitLearnInterface)

- [GaussianMixtureRegressor (BetaML.jl)](@ref GaussianMixtureRegressor_BetaML)

- [GaussianProcessRegressor (MLJScikitLearnInterface.jl)](@ref GaussianProcessRegressor_MLJScikitLearnInterface)

- [GradientBoostingRegressor (MLJScikitLearnInterface.jl)](@ref GradientBoostingRegressor_MLJScikitLearnInterface)

- [HistGradientBoostingRegressor (MLJScikitLearnInterface.jl)](@ref HistGradientBoostingRegressor_MLJScikitLearnInterface)

- [HuberRegressor (MLJLinearModels.jl)](@ref HuberRegressor_MLJLinearModels)

- [HuberRegressor (MLJScikitLearnInterface.jl)](@ref HuberRegressor_MLJScikitLearnInterface)

- [KNNRegressor (NearestNeighborModels.jl)](@ref KNNRegressor_NearestNeighborModels)

- [KNeighborsRegressor (MLJScikitLearnInterface.jl)](@ref KNeighborsRegressor_MLJScikitLearnInterface)

- [KPLSRegressor (PartialLeastSquaresRegressor.jl)](@ref KPLSRegressor_PartialLeastSquaresRegressor)

- [LADRegressor (MLJLinearModels.jl)](@ref LADRegressor_MLJLinearModels)

- [LGBMRegressor (LightGBM.jl)](@ref LGBMRegressor_LightGBM)

- [LarsCVRegressor (MLJScikitLearnInterface.jl)](@ref LarsCVRegressor_MLJScikitLearnInterface)

- [LarsRegressor (MLJScikitLearnInterface.jl)](@ref LarsRegressor_MLJScikitLearnInterface)

- [LassoCVRegressor (MLJScikitLearnInterface.jl)](@ref LassoCVRegressor_MLJScikitLearnInterface)

- [LassoLarsCVRegressor (MLJScikitLearnInterface.jl)](@ref LassoLarsCVRegressor_MLJScikitLearnInterface)

- [LassoLarsICRegressor (MLJScikitLearnInterface.jl)](@ref LassoLarsICRegressor_MLJScikitLearnInterface)

- [LassoLarsRegressor (MLJScikitLearnInterface.jl)](@ref LassoLarsRegressor_MLJScikitLearnInterface)

- [LassoRegressor (MLJLinearModels.jl)](@ref LassoRegressor_MLJLinearModels)

- [LassoRegressor (MLJScikitLearnInterface.jl)](@ref LassoRegressor_MLJScikitLearnInterface)

- [LinearCountRegressor (GLM.jl/MLJGLMInterface.jl)](@ref LinearCountRegressor_GLM)

- [LinearRegressor (GLM.jl/MLJGLMInterface.jl)](@ref LinearRegressor_GLM)

- [LinearRegressor (MLJLinearModels.jl)](@ref LinearRegressor_MLJLinearModels)

- [LinearRegressor (MLJScikitLearnInterface.jl)](@ref LinearRegressor_MLJScikitLearnInterface)

- [LinearRegressor (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref LinearRegressor_MultivariateStats)

- [MultiTaskElasticNetCVRegressor (MLJScikitLearnInterface.jl)](@ref MultiTaskElasticNetCVRegressor_MLJScikitLearnInterface)

- [MultiTaskElasticNetRegressor (MLJScikitLearnInterface.jl)](@ref MultiTaskElasticNetRegressor_MLJScikitLearnInterface)

- [MultiTaskLassoCVRegressor (MLJScikitLearnInterface.jl)](@ref MultiTaskLassoCVRegressor_MLJScikitLearnInterface)

- [MultiTaskLassoRegressor (MLJScikitLearnInterface.jl)](@ref MultiTaskLassoRegressor_MLJScikitLearnInterface)

- [MultitargetGaussianMixtureRegressor (BetaML.jl)](@ref MultitargetGaussianMixtureRegressor_BetaML)

- [MultitargetKNNRegressor (NearestNeighborModels.jl)](@ref MultitargetKNNRegressor_NearestNeighborModels)

- [MultitargetLinearRegressor (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref MultitargetLinearRegressor_MultivariateStats)

- [MultitargetNeuralNetworkRegressor (BetaML.jl)](@ref MultitargetNeuralNetworkRegressor_BetaML)

- [MultitargetNeuralNetworkRegressor (MLJFlux.jl)](@ref MultitargetNeuralNetworkRegressor_MLJFlux)

- [MultitargetRidgeRegressor (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref MultitargetRidgeRegressor_MultivariateStats)

- [MultitargetSRRegressor (SymbolicRegression.jl)](@ref MultitargetSRRegressor_SymbolicRegression)

- [NeuralNetworkRegressor (BetaML.jl)](@ref NeuralNetworkRegressor_BetaML)

- [NeuralNetworkRegressor (MLJFlux.jl)](@ref NeuralNetworkRegressor_MLJFlux)

- [NuSVR (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref NuSVR_LIBSVM)

- [OrthogonalMatchingPursuitCVRegressor (MLJScikitLearnInterface.jl)](@ref OrthogonalMatchingPursuitCVRegressor_MLJScikitLearnInterface)

- [OrthogonalMatchingPursuitRegressor (MLJScikitLearnInterface.jl)](@ref OrthogonalMatchingPursuitRegressor_MLJScikitLearnInterface)

- [PLSRegressor (PartialLeastSquaresRegressor.jl)](@ref PLSRegressor_PartialLeastSquaresRegressor)

- [PartLS (PartitionedLS.jl)](@ref PartLS_PartitionedLS)

- [PassiveAggressiveRegressor (MLJScikitLearnInterface.jl)](@ref PassiveAggressiveRegressor_MLJScikitLearnInterface)

- [QuantileRegressor (MLJLinearModels.jl)](@ref QuantileRegressor_MLJLinearModels)

- [RANSACRegressor (MLJScikitLearnInterface.jl)](@ref RANSACRegressor_MLJScikitLearnInterface)

- [RandomForestRegressor (BetaML.jl)](@ref RandomForestRegressor_BetaML)

- [RandomForestRegressor (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestRegressor_DecisionTree)

- [RandomForestRegressor (MLJScikitLearnInterface.jl)](@ref RandomForestRegressor_MLJScikitLearnInterface)

- [RidgeRegressor (MLJLinearModels.jl)](@ref RidgeRegressor_MLJLinearModels)

- [RidgeRegressor (MLJScikitLearnInterface.jl)](@ref RidgeRegressor_MLJScikitLearnInterface)

- [RidgeRegressor (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref RidgeRegressor_MultivariateStats)

- [RobustRegressor (MLJLinearModels.jl)](@ref RobustRegressor_MLJLinearModels)

- [SGDRegressor (MLJScikitLearnInterface.jl)](@ref SGDRegressor_MLJScikitLearnInterface)

- [SRRegressor (SymbolicRegression.jl)](@ref SRRegressor_SymbolicRegression)

- [SVMLinearRegressor (MLJScikitLearnInterface.jl)](@ref SVMLinearRegressor_MLJScikitLearnInterface)

- [SVMNuRegressor (MLJScikitLearnInterface.jl)](@ref SVMNuRegressor_MLJScikitLearnInterface)

- [SVMRegressor (MLJScikitLearnInterface.jl)](@ref SVMRegressor_MLJScikitLearnInterface)

- [StableForestRegressor (SIRUS.jl)](@ref StableForestRegressor_SIRUS)

- [StableRulesRegressor (SIRUS.jl)](@ref StableRulesRegressor_SIRUS)

- [TheilSenRegressor (MLJScikitLearnInterface.jl)](@ref TheilSenRegressor_MLJScikitLearnInterface)

- [XGBoostCount (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostCount_XGBoost)

- [XGBoostRegressor (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostRegressor_XGBoost)

##  Classification
- [AdaBoostClassifier (MLJScikitLearnInterface.jl)](@ref AdaBoostClassifier_MLJScikitLearnInterface)

- [AdaBoostStumpClassifier (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref AdaBoostStumpClassifier_DecisionTree)

- [BaggingClassifier (MLJScikitLearnInterface.jl)](@ref BaggingClassifier_MLJScikitLearnInterface)

- [BayesianLDA (MLJScikitLearnInterface.jl)](@ref BayesianLDA_MLJScikitLearnInterface)

- [BayesianLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianLDA_MultivariateStats)

- [BayesianQDA (MLJScikitLearnInterface.jl)](@ref BayesianQDA_MLJScikitLearnInterface)

- [BayesianSubspaceLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianSubspaceLDA_MultivariateStats)

- [BernoulliNBClassifier (MLJScikitLearnInterface.jl)](@ref BernoulliNBClassifier_MLJScikitLearnInterface)

- [CatBoostClassifier (CatBoost.jl)](@ref CatBoostClassifier_CatBoost)

- [ComplementNBClassifier (MLJScikitLearnInterface.jl)](@ref ComplementNBClassifier_MLJScikitLearnInterface)

- [ConstantClassifier (MLJModels.jl)](@ref ConstantClassifier_MLJModels)

- [DecisionTreeClassifier (BetaML.jl)](@ref DecisionTreeClassifier_BetaML)

- [DecisionTreeClassifier (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref DecisionTreeClassifier_DecisionTree)

- [DeterministicConstantClassifier (MLJModels.jl)](@ref DeterministicConstantClassifier_MLJModels)

- [DummyClassifier (MLJScikitLearnInterface.jl)](@ref DummyClassifier_MLJScikitLearnInterface)

- [EvoTreeClassifier (EvoTrees.jl)](@ref EvoTreeClassifier_EvoTrees)

- [ExtraTreesClassifier (MLJScikitLearnInterface.jl)](@ref ExtraTreesClassifier_MLJScikitLearnInterface)

- [GaussianNBClassifier (MLJScikitLearnInterface.jl)](@ref GaussianNBClassifier_MLJScikitLearnInterface)

- [GaussianNBClassifier (NaiveBayes.jl/MLJNaiveBayesInterface.jl)](@ref GaussianNBClassifier_NaiveBayes)

- [GaussianProcessClassifier (MLJScikitLearnInterface.jl)](@ref GaussianProcessClassifier_MLJScikitLearnInterface)

- [GradientBoostingClassifier (MLJScikitLearnInterface.jl)](@ref GradientBoostingClassifier_MLJScikitLearnInterface)

- [HistGradientBoostingClassifier (MLJScikitLearnInterface.jl)](@ref HistGradientBoostingClassifier_MLJScikitLearnInterface)

- [ImageClassifier (MLJFlux.jl)](@ref ImageClassifier_MLJFlux)

- [KNNClassifier (NearestNeighborModels.jl)](@ref KNNClassifier_NearestNeighborModels)

- [KNeighborsClassifier (MLJScikitLearnInterface.jl)](@ref KNeighborsClassifier_MLJScikitLearnInterface)

- [KernelPerceptronClassifier (BetaML.jl)](@ref KernelPerceptronClassifier_BetaML)

- [LDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref LDA_MultivariateStats)

- [LGBMClassifier (LightGBM.jl)](@ref LGBMClassifier_LightGBM)

- [LinearBinaryClassifier (GLM.jl/MLJGLMInterface.jl)](@ref LinearBinaryClassifier_GLM)

- [LinearSVC (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref LinearSVC_LIBSVM)

- [LogisticCVClassifier (MLJScikitLearnInterface.jl)](@ref LogisticCVClassifier_MLJScikitLearnInterface)

- [LogisticClassifier (MLJLinearModels.jl)](@ref LogisticClassifier_MLJLinearModels)

- [LogisticClassifier (MLJScikitLearnInterface.jl)](@ref LogisticClassifier_MLJScikitLearnInterface)

- [MultinomialClassifier (MLJLinearModels.jl)](@ref MultinomialClassifier_MLJLinearModels)

- [MultinomialNBClassifier (MLJScikitLearnInterface.jl)](@ref MultinomialNBClassifier_MLJScikitLearnInterface)

- [MultinomialNBClassifier (NaiveBayes.jl/MLJNaiveBayesInterface.jl)](@ref MultinomialNBClassifier_NaiveBayes)

- [MultitargetKNNClassifier (NearestNeighborModels.jl)](@ref MultitargetKNNClassifier_NearestNeighborModels)

- [NeuralNetworkClassifier (BetaML.jl)](@ref NeuralNetworkClassifier_BetaML)

- [NeuralNetworkClassifier (MLJFlux.jl)](@ref NeuralNetworkClassifier_MLJFlux)

- [NuSVC (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref NuSVC_LIBSVM)

- [OneRuleClassifier (OneRule.jl)](@ref OneRuleClassifier_OneRule)

- [PassiveAggressiveClassifier (MLJScikitLearnInterface.jl)](@ref PassiveAggressiveClassifier_MLJScikitLearnInterface)

- [PegasosClassifier (BetaML.jl)](@ref PegasosClassifier_BetaML)

- [PerceptronClassifier (BetaML.jl)](@ref PerceptronClassifier_BetaML)

- [PerceptronClassifier (MLJScikitLearnInterface.jl)](@ref PerceptronClassifier_MLJScikitLearnInterface)

- [ProbabilisticNuSVC (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref ProbabilisticNuSVC_LIBSVM)

- [ProbabilisticSGDClassifier (MLJScikitLearnInterface.jl)](@ref ProbabilisticSGDClassifier_MLJScikitLearnInterface)

- [ProbabilisticSVC (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref ProbabilisticSVC_LIBSVM)

- [RandomForestClassifier (BetaML.jl)](@ref RandomForestClassifier_BetaML)

- [RandomForestClassifier (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestClassifier_DecisionTree)

- [RandomForestClassifier (MLJScikitLearnInterface.jl)](@ref RandomForestClassifier_MLJScikitLearnInterface)

- [RidgeCVClassifier (MLJScikitLearnInterface.jl)](@ref RidgeCVClassifier_MLJScikitLearnInterface)

- [RidgeCVRegressor (MLJScikitLearnInterface.jl)](@ref RidgeCVRegressor_MLJScikitLearnInterface)

- [RidgeClassifier (MLJScikitLearnInterface.jl)](@ref RidgeClassifier_MLJScikitLearnInterface)

- [SGDClassifier (MLJScikitLearnInterface.jl)](@ref SGDClassifier_MLJScikitLearnInterface)

- [SVC (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref SVC_LIBSVM)

- [SVMClassifier (MLJScikitLearnInterface.jl)](@ref SVMClassifier_MLJScikitLearnInterface)

- [SVMLinearClassifier (MLJScikitLearnInterface.jl)](@ref SVMLinearClassifier_MLJScikitLearnInterface)

- [SVMNuClassifier (MLJScikitLearnInterface.jl)](@ref SVMNuClassifier_MLJScikitLearnInterface)

- [StableForestClassifier (SIRUS.jl)](@ref StableForestClassifier_SIRUS)

- [StableRulesClassifier (SIRUS.jl)](@ref StableRulesClassifier_SIRUS)

- [SubspaceLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref SubspaceLDA_MultivariateStats)

- [XGBoostClassifier (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostClassifier_XGBoost)

##  Outlier Detection
- [ABODDetector (OutlierDetectionNeighbors.jl)](@ref ABODDetector_OutlierDetectionNeighbors)

- [ABODDetector (OutlierDetectionPython.jl)](@ref ABODDetector_OutlierDetectionPython)

- [CBLOFDetector (OutlierDetectionPython.jl)](@ref CBLOFDetector_OutlierDetectionPython)

- [CDDetector (OutlierDetectionPython.jl)](@ref CDDetector_OutlierDetectionPython)

- [COFDetector (OutlierDetectionNeighbors.jl)](@ref COFDetector_OutlierDetectionNeighbors)

- [COFDetector (OutlierDetectionPython.jl)](@ref COFDetector_OutlierDetectionPython)

- [COPODDetector (OutlierDetectionPython.jl)](@ref COPODDetector_OutlierDetectionPython)

- [DNNDetector (OutlierDetectionNeighbors.jl)](@ref DNNDetector_OutlierDetectionNeighbors)

- [ECODDetector (OutlierDetectionPython.jl)](@ref ECODDetector_OutlierDetectionPython)

- [GMMDetector (OutlierDetectionPython.jl)](@ref GMMDetector_OutlierDetectionPython)

- [HBOSDetector (OutlierDetectionPython.jl)](@ref HBOSDetector_OutlierDetectionPython)

- [IForestDetector (OutlierDetectionPython.jl)](@ref IForestDetector_OutlierDetectionPython)

- [INNEDetector (OutlierDetectionPython.jl)](@ref INNEDetector_OutlierDetectionPython)

- [KDEDetector (OutlierDetectionPython.jl)](@ref KDEDetector_OutlierDetectionPython)

- [KNNDetector (OutlierDetectionNeighbors.jl)](@ref KNNDetector_OutlierDetectionNeighbors)

- [KNNDetector (OutlierDetectionPython.jl)](@ref KNNDetector_OutlierDetectionPython)

- [LMDDDetector (OutlierDetectionPython.jl)](@ref LMDDDetector_OutlierDetectionPython)

- [LOCIDetector (OutlierDetectionPython.jl)](@ref LOCIDetector_OutlierDetectionPython)

- [LODADetector (OutlierDetectionPython.jl)](@ref LODADetector_OutlierDetectionPython)

- [LOFDetector (OutlierDetectionNeighbors.jl)](@ref LOFDetector_OutlierDetectionNeighbors)

- [LOFDetector (OutlierDetectionPython.jl)](@ref LOFDetector_OutlierDetectionPython)

- [MCDDetector (OutlierDetectionPython.jl)](@ref MCDDetector_OutlierDetectionPython)

- [OCSVMDetector (OutlierDetectionPython.jl)](@ref OCSVMDetector_OutlierDetectionPython)

- [OneClassSVM (LIBSVM.jl/MLJLIBSVMInterface.jl)](@ref OneClassSVM_LIBSVM)

- [PCADetector (OutlierDetectionPython.jl)](@ref PCADetector_OutlierDetectionPython)

- [RODDetector (OutlierDetectionPython.jl)](@ref RODDetector_OutlierDetectionPython)

- [SODDetector (OutlierDetectionPython.jl)](@ref SODDetector_OutlierDetectionPython)

- [SOSDetector (OutlierDetectionPython.jl)](@ref SOSDetector_OutlierDetectionPython)

##  Iterative Models
- [CatBoostClassifier (CatBoost.jl)](@ref CatBoostClassifier_CatBoost)

- [CatBoostRegressor (CatBoost.jl)](@ref CatBoostRegressor_CatBoost)

- [EvoSplineRegressor (EvoLinear.jl)](@ref EvoSplineRegressor_EvoLinear)

- [EvoTreeClassifier (EvoTrees.jl)](@ref EvoTreeClassifier_EvoTrees)

- [EvoTreeCount (EvoTrees.jl)](@ref EvoTreeCount_EvoTrees)

- [EvoTreeGaussian (EvoTrees.jl)](@ref EvoTreeGaussian_EvoTrees)

- [EvoTreeMLE (EvoTrees.jl)](@ref EvoTreeMLE_EvoTrees)

- [EvoTreeRegressor (EvoTrees.jl)](@ref EvoTreeRegressor_EvoTrees)

- [ExtraTreesClassifier (MLJScikitLearnInterface.jl)](@ref ExtraTreesClassifier_MLJScikitLearnInterface)

- [ExtraTreesRegressor (MLJScikitLearnInterface.jl)](@ref ExtraTreesRegressor_MLJScikitLearnInterface)

- [ImageClassifier (MLJFlux.jl)](@ref ImageClassifier_MLJFlux)

- [LGBMClassifier (LightGBM.jl)](@ref LGBMClassifier_LightGBM)

- [LGBMRegressor (LightGBM.jl)](@ref LGBMRegressor_LightGBM)

- [MultitargetNeuralNetworkRegressor (MLJFlux.jl)](@ref MultitargetNeuralNetworkRegressor_MLJFlux)

- [NeuralNetworkClassifier (MLJFlux.jl)](@ref NeuralNetworkClassifier_MLJFlux)

- [NeuralNetworkRegressor (MLJFlux.jl)](@ref NeuralNetworkRegressor_MLJFlux)

- [PerceptronClassifier (BetaML.jl)](@ref PerceptronClassifier_BetaML)

- [PerceptronClassifier (MLJScikitLearnInterface.jl)](@ref PerceptronClassifier_MLJScikitLearnInterface)

- [RandomForestClassifier (BetaML.jl)](@ref RandomForestClassifier_BetaML)

- [RandomForestClassifier (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestClassifier_DecisionTree)

- [RandomForestClassifier (MLJScikitLearnInterface.jl)](@ref RandomForestClassifier_MLJScikitLearnInterface)

- [RandomForestImputer (BetaML.jl)](@ref RandomForestImputer_BetaML)

- [RandomForestRegressor (BetaML.jl)](@ref RandomForestRegressor_BetaML)

- [RandomForestRegressor (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestRegressor_DecisionTree)

- [RandomForestRegressor (MLJScikitLearnInterface.jl)](@ref RandomForestRegressor_MLJScikitLearnInterface)

- [XGBoostClassifier (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostClassifier_XGBoost)

- [XGBoostCount (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostCount_XGBoost)

- [XGBoostRegressor (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostRegressor_XGBoost)

##  Ensemble Models
- [BaggingClassifier (MLJScikitLearnInterface.jl)](@ref BaggingClassifier_MLJScikitLearnInterface)

- [BaggingRegressor (MLJScikitLearnInterface.jl)](@ref BaggingRegressor_MLJScikitLearnInterface)

- [CatBoostClassifier (CatBoost.jl)](@ref CatBoostClassifier_CatBoost)

- [CatBoostRegressor (CatBoost.jl)](@ref CatBoostRegressor_CatBoost)

- [EvoSplineRegressor (EvoLinear.jl)](@ref EvoSplineRegressor_EvoLinear)

- [EvoTreeClassifier (EvoTrees.jl)](@ref EvoTreeClassifier_EvoTrees)

- [EvoTreeCount (EvoTrees.jl)](@ref EvoTreeCount_EvoTrees)

- [EvoTreeGaussian (EvoTrees.jl)](@ref EvoTreeGaussian_EvoTrees)

- [EvoTreeMLE (EvoTrees.jl)](@ref EvoTreeMLE_EvoTrees)

- [EvoTreeRegressor (EvoTrees.jl)](@ref EvoTreeRegressor_EvoTrees)

- [LGBMClassifier (LightGBM.jl)](@ref LGBMClassifier_LightGBM)

- [LGBMRegressor (LightGBM.jl)](@ref LGBMRegressor_LightGBM)

- [RandomForestClassifier (BetaML.jl)](@ref RandomForestClassifier_BetaML)

- [RandomForestClassifier (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestClassifier_DecisionTree)

- [RandomForestClassifier (MLJScikitLearnInterface.jl)](@ref RandomForestClassifier_MLJScikitLearnInterface)

- [RandomForestImputer (BetaML.jl)](@ref RandomForestImputer_BetaML)

- [RandomForestRegressor (BetaML.jl)](@ref RandomForestRegressor_BetaML)

- [RandomForestRegressor (DecisionTree.jl/MLJDecisionTreeInterface.jl)](@ref RandomForestRegressor_DecisionTree)

- [RandomForestRegressor (MLJScikitLearnInterface.jl)](@ref RandomForestRegressor_MLJScikitLearnInterface)

- [XGBoostClassifier (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostClassifier_XGBoost)

- [XGBoostCount (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostCount_XGBoost)

- [XGBoostRegressor (XGBoost.jl/MLJXGBoostInterface.jl)](@ref XGBoostRegressor_XGBoost)

##  Clustering
- [AffinityPropagation (MLJScikitLearnInterface.jl)](@ref AffinityPropagation_MLJScikitLearnInterface)

- [AgglomerativeClustering (MLJScikitLearnInterface.jl)](@ref AgglomerativeClustering_MLJScikitLearnInterface)

- [Birch (MLJScikitLearnInterface.jl)](@ref Birch_MLJScikitLearnInterface)

- [BisectingKMeans (MLJScikitLearnInterface.jl)](@ref BisectingKMeans_MLJScikitLearnInterface)

- [DBSCAN (Clustering.jl/MLJClusteringInterface.jl)](@ref DBSCAN_Clustering)

- [DBSCAN (MLJScikitLearnInterface.jl)](@ref DBSCAN_MLJScikitLearnInterface)

- [FeatureAgglomeration (MLJScikitLearnInterface.jl)](@ref FeatureAgglomeration_MLJScikitLearnInterface)

- [GaussianMixtureClusterer (BetaML.jl)](@ref GaussianMixtureClusterer_BetaML)

- [HDBSCAN (MLJScikitLearnInterface.jl)](@ref HDBSCAN_MLJScikitLearnInterface)

- [HierarchicalClustering (Clustering.jl/MLJClusteringInterface.jl)](@ref HierarchicalClustering_Clustering)

- [KMeans (Clustering.jl/MLJClusteringInterface.jl)](@ref KMeans_Clustering)

- [KMeans (MLJScikitLearnInterface.jl)](@ref KMeans_MLJScikitLearnInterface)

- [KMeans (ParallelKMeans.jl)](@ref KMeans_ParallelKMeans)

- [KMeansClusterer (BetaML.jl)](@ref KMeansClusterer_BetaML)

- [KMedoids (Clustering.jl/MLJClusteringInterface.jl)](@ref KMedoids_Clustering)

- [KMedoidsClusterer (BetaML.jl)](@ref KMedoidsClusterer_BetaML)

- [MeanShift (MLJScikitLearnInterface.jl)](@ref MeanShift_MLJScikitLearnInterface)

- [MiniBatchKMeans (MLJScikitLearnInterface.jl)](@ref MiniBatchKMeans_MLJScikitLearnInterface)

- [OPTICS (MLJScikitLearnInterface.jl)](@ref OPTICS_MLJScikitLearnInterface)

- [SelfOrganizingMap (SelfOrganizingMaps.jl)](@ref SelfOrganizingMap_SelfOrganizingMaps)

- [SpectralClustering (MLJScikitLearnInterface.jl)](@ref SpectralClustering_MLJScikitLearnInterface)

##  Dimension Reduction
- [AutoEncoder (BetaML.jl)](@ref AutoEncoder_BetaML)

- [BayesianLDA (MLJScikitLearnInterface.jl)](@ref BayesianLDA_MLJScikitLearnInterface)

- [BayesianLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianLDA_MultivariateStats)

- [BayesianQDA (MLJScikitLearnInterface.jl)](@ref BayesianQDA_MLJScikitLearnInterface)

- [BayesianSubspaceLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianSubspaceLDA_MultivariateStats)

- [Birch (MLJScikitLearnInterface.jl)](@ref Birch_MLJScikitLearnInterface)

- [BisectingKMeans (MLJScikitLearnInterface.jl)](@ref BisectingKMeans_MLJScikitLearnInterface)

- [FactorAnalysis (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref FactorAnalysis_MultivariateStats)

- [FeatureSelector (MLJModels.jl)](@ref FeatureSelector_MLJModels)

- [KMeans (Clustering.jl/MLJClusteringInterface.jl)](@ref KMeans_Clustering)

- [KMeans (MLJScikitLearnInterface.jl)](@ref KMeans_MLJScikitLearnInterface)

- [KMeans (ParallelKMeans.jl)](@ref KMeans_ParallelKMeans)

- [KMedoids (Clustering.jl/MLJClusteringInterface.jl)](@ref KMedoids_Clustering)

- [KernelPCA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref KernelPCA_MultivariateStats)

- [LDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref LDA_MultivariateStats)

- [MiniBatchKMeans (MLJScikitLearnInterface.jl)](@ref MiniBatchKMeans_MLJScikitLearnInterface)

- [PCA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref PCA_MultivariateStats)

- [PPCA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref PPCA_MultivariateStats)

- [SelfOrganizingMap (SelfOrganizingMaps.jl)](@ref SelfOrganizingMap_SelfOrganizingMaps)

- [SubspaceLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref SubspaceLDA_MultivariateStats)

- [TSVDTransformer (TSVD.jl/MLJTSVDInterface.jl)](@ref TSVDTransformer_TSVD)

##  Bayesian Models
- [ARDRegressor (MLJScikitLearnInterface.jl)](@ref ARDRegressor_MLJScikitLearnInterface)

- [BayesianLDA (MLJScikitLearnInterface.jl)](@ref BayesianLDA_MLJScikitLearnInterface)

- [BayesianLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianLDA_MultivariateStats)

- [BayesianQDA (MLJScikitLearnInterface.jl)](@ref BayesianQDA_MLJScikitLearnInterface)

- [BayesianRidgeRegressor (MLJScikitLearnInterface.jl)](@ref BayesianRidgeRegressor_MLJScikitLearnInterface)

- [BayesianSubspaceLDA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref BayesianSubspaceLDA_MultivariateStats)

- [BernoulliNBClassifier (MLJScikitLearnInterface.jl)](@ref BernoulliNBClassifier_MLJScikitLearnInterface)

- [ComplementNBClassifier (MLJScikitLearnInterface.jl)](@ref ComplementNBClassifier_MLJScikitLearnInterface)

- [GaussianNBClassifier (MLJScikitLearnInterface.jl)](@ref GaussianNBClassifier_MLJScikitLearnInterface)

- [GaussianNBClassifier (NaiveBayes.jl/MLJNaiveBayesInterface.jl)](@ref GaussianNBClassifier_NaiveBayes)

- [GaussianProcessClassifier (MLJScikitLearnInterface.jl)](@ref GaussianProcessClassifier_MLJScikitLearnInterface)

- [GaussianProcessRegressor (MLJScikitLearnInterface.jl)](@ref GaussianProcessRegressor_MLJScikitLearnInterface)

- [MultinomialNBClassifier (MLJScikitLearnInterface.jl)](@ref MultinomialNBClassifier_MLJScikitLearnInterface)

- [MultinomialNBClassifier (NaiveBayes.jl/MLJNaiveBayesInterface.jl)](@ref MultinomialNBClassifier_NaiveBayes)

##  Class Imbalance
- [BorderlineSMOTE1 (Imbalance.jl)](@ref BorderlineSMOTE1_Imbalance)

- [ClusterUndersampler (Imbalance.jl)](@ref ClusterUndersampler_Imbalance)

- [ENNUndersampler (Imbalance.jl)](@ref ENNUndersampler_Imbalance)

- [ROSE (Imbalance.jl)](@ref ROSE_Imbalance)

- [RandomOversampler (Imbalance.jl)](@ref RandomOversampler_Imbalance)

- [RandomUndersampler (Imbalance.jl)](@ref RandomUndersampler_Imbalance)

- [RandomWalkOversampler (Imbalance.jl)](@ref RandomWalkOversampler_Imbalance)

- [SMOTE (Imbalance.jl)](@ref SMOTE_Imbalance)

- [SMOTEN (Imbalance.jl)](@ref SMOTEN_Imbalance)

- [SMOTENC (Imbalance.jl)](@ref SMOTENC_Imbalance)

- [TomekUndersampler (Imbalance.jl)](@ref TomekUndersampler_Imbalance)

##  Encoders
- [BM25Transformer (MLJText.jl)](@ref BM25Transformer_MLJText)

- [ContinuousEncoder (MLJModels.jl)](@ref ContinuousEncoder_MLJModels)

- [CountTransformer (MLJText.jl)](@ref CountTransformer_MLJText)

- [ICA (MultivariateStats.jl/MLJMultivariateStatsInterface.jl)](@ref ICA_MultivariateStats)

- [OneHotEncoder (MLJModels.jl)](@ref OneHotEncoder_MLJModels)

- [Standardizer (MLJModels.jl)](@ref Standardizer_MLJModels)

- [TfidfTransformer (MLJText.jl)](@ref TfidfTransformer_MLJText)

- [UnivariateBoxCoxTransformer (MLJModels.jl)](@ref UnivariateBoxCoxTransformer_MLJModels)

- [UnivariateDiscretizer (MLJModels.jl)](@ref UnivariateDiscretizer_MLJModels)

- [UnivariateStandardizer (MLJModels.jl)](@ref UnivariateStandardizer_MLJModels)

- [UnivariateTimeTypeToContinuous (MLJModels.jl)](@ref UnivariateTimeTypeToContinuous_MLJModels)

##  Static Models
- [AgglomerativeClustering (MLJScikitLearnInterface.jl)](@ref AgglomerativeClustering_MLJScikitLearnInterface)

- [DBSCAN (Clustering.jl/MLJClusteringInterface.jl)](@ref DBSCAN_Clustering)

- [DBSCAN (MLJScikitLearnInterface.jl)](@ref DBSCAN_MLJScikitLearnInterface)

- [FeatureAgglomeration (MLJScikitLearnInterface.jl)](@ref FeatureAgglomeration_MLJScikitLearnInterface)

- [HDBSCAN (MLJScikitLearnInterface.jl)](@ref HDBSCAN_MLJScikitLearnInterface)

- [InteractionTransformer (MLJModels.jl)](@ref InteractionTransformer_MLJModels)

- [OPTICS (MLJScikitLearnInterface.jl)](@ref OPTICS_MLJScikitLearnInterface)

- [SpectralClustering (MLJScikitLearnInterface.jl)](@ref SpectralClustering_MLJScikitLearnInterface)

##  Missing Value Imputation
- [FillImputer (MLJModels.jl)](@ref FillImputer_MLJModels)

- [GaussianMixtureImputer (BetaML.jl)](@ref GaussianMixtureImputer_BetaML)

- [GeneralImputer (BetaML.jl)](@ref GeneralImputer_BetaML)

- [RandomForestImputer (BetaML.jl)](@ref RandomForestImputer_BetaML)

- [SimpleImputer (BetaML.jl)](@ref SimpleImputer_BetaML)

- [UnivariateFillImputer (MLJModels.jl)](@ref UnivariateFillImputer_MLJModels)

##  Distribution Fitter
- [GaussianMixtureClusterer (BetaML.jl)](@ref GaussianMixtureClusterer_BetaML)

- [GaussianMixtureImputer (BetaML.jl)](@ref GaussianMixtureImputer_BetaML)

- [GaussianMixtureRegressor (BetaML.jl)](@ref GaussianMixtureRegressor_BetaML)

- [MultitargetGaussianMixtureRegressor (BetaML.jl)](@ref MultitargetGaussianMixtureRegressor_BetaML)

##  Text Analysis
- [BM25Transformer (MLJText.jl)](@ref BM25Transformer_MLJText)

- [CountTransformer (MLJText.jl)](@ref CountTransformer_MLJText)

- [TfidfTransformer (MLJText.jl)](@ref TfidfTransformer_MLJText)

##  Image Processing
- [ImageClassifier (MLJFlux.jl)](@ref ImageClassifier_MLJFlux)