<script lang="ts">

import MarkdownIt from "markdown-it";
import modelBrowser from "$lib/data/model_browser.md?raw";
import { markdownToJSON, } from "./utilts"; // Make sure customSort function is exported from "utils.ts"

const md = new MarkdownIt();
const modelBrowserJson = markdownToJSON(modelBrowser);

console.log(modelBrowserJson);

const problems = ["Classification", "Regression", "Clustering", "Dimension Reduction", "Outlier Detection", "Class Imbalance", "Missing Value Imputation", "Text Analysis", "Image Processing"]
const descriptions = [
    "Predicting which category an observation belongs to.",
    "Predicting continuous outcomes.",
    "Grouping similar data points together.",
    "Reducing the number of variables while preserving important information.",
    "Identifying anomalies or outliers in the data.",
    "Handling datasets where one class is significantly more prevalent than others.",
    "Filling in missing data points in a dataset.",
    "Extracting insights or patterns from textual data.",
    "Analyzing and manipulating visual data."
];
const images = [
    "https://miro.medium.com/v2/resize:fit:1400/0*0l9nrArESsW1Ew0O.gif",
    "https://miro.medium.com/v2/resize:fit:1280/1*eeIvlwkMNG1wSmj3FR6M2g.gif",
    "https://media.licdn.com/dms/image/C5612AQH8kEizAouznA/article-cover_image-shrink_600_2000/0/1626424726069?e=2147483647&v=beta&t=deUL_yPDFPXK8dkspX2oJZWX1qqyx3XBokl02TN8x9k",
    "https://miro.medium.com/v2/resize:fit:920/1*ik3r8uZgzGVGA-bgQVIyaw.gif",
    "https://datascientest.com/wp-content/uploads/2021/08/python_anomaly_detection_isolation_forest.gif",
    "https://miro.medium.com/v2/resize:fit:1198/1*b_f1ylxNvkD8F7Z5aajqTw.gif",
    "https://www.scaler.com/topics/images/knn-imputation.webp",
    "https://miro.medium.com/v2/resize:fit:1400/1*RHlKwsmF7MtdXCejJ3eL2A.gif",
    "https://sgu.ac.id/wp-content/uploads/2020/12/1_QHxBLzMK7rp_5ysw77uK3A.gif"
]

const modelGenres = Object.keys(modelBrowserJson).filter(key => !problems.includes(key));

</script>

<div style="display: flex; justify-content: center; align-items: center;">
<div class="modern-grid">
	{#each problems as problem}
		<div class="grid-item">
				<img src={images[problems.indexOf(problem)]} alt="" />
				<div class="item-title">
					<b>{problem}</b>
					<p>{descriptions[problems.indexOf(problem)]}</p>
				</div>
		</div>
	{/each}
</div>
</div>



<style lang="scss">

	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 3), 1fr));
		@media only screen and (max-width: 767px) {
			grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 2), 1fr));
		}
		gap: 20px;
		max-width: 1200px;
		padding: 20px;

		.grid-item {
			position: relative;
			overflow: hidden;
			border-radius: 15px;
			transition: transform 0.3s ease;
			cursor: pointer;
			height: 300px;

            border: 1px solid #bbbbbb;

			&:hover {
				transform: scale(1.05);
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
			}

			.item-title {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background: rgb(93, 53, 97);
				color: #fff;
				padding: 8px 15px;
				font-size: 16px;

				p {
					font-size: 0.9rem;
					opacity: 0.7;
					font-weight: normal !important;
					// display: none;
				}
				span {
					margin-top: 0.5rem;
					font-size: 0.9rem;
					display: none;
				}
			}

			// &:hover {
			// 	p {
			// 		display: block;
			// 		animation: fade_in_show 0.5s;
			// 	}
			// 	span {
			// 		display: block;
			// 	}

			// 	.special {
			// 		display: none;
			// 	}
			// }

			@keyframes fade_in_show {
				0% {
					opacity: 0;
					transform: scale(0);
				}

				100% {
					opacity: 0.7;
					transform: scale(1);
				}
			}
		}
	}
</style>
