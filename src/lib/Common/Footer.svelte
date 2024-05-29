<script>
  export let title = "Machine Learning in Julia";
  export let subTitles= ["Are you making the right use of your data? Let's find out.", "From pipelines to networks all in one package", "A package for elegant and generic machine learning"]
   let randomInd = Math.floor(Math.random() * subTitles.length);

</script>

<div class="real-footer">
    <footer>
      <div class="footer-content">
        <h3>{title}</h3>
        <p>{subTitles[randomInd]}</p>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2024 All Rights Reserved.</p>

		<div style="display: flex; flex-direction: row; gap: 15px;">
		<p >
            <a href="https://sebastian.vollmer.ms/jobs/">Opportunities</a>
        </p>
        <p >
            <a href="./about">About MLJ</a>
        </p>
		<p >
            <a href="mailto:support@mlj.com">Contact Us</a>
        </p>
        </div>
      </div>
    </footer>
  </div>

<style lang="scss">
	.real-footer {
		footer {
			background: rgb(100, 50, 100);
			background: radial-gradient(rgb(100, 50, 100), #2b2b2b);
        	background-size: 200% 200%; 
        	animation: gradientAnimation 6s infinite;	

			height: auto;

			width: 100%;

			padding-top: 40px;

			color: #fff;

			margin-top: 2rem;
		}
	}

	.footer-content {
		display: flex;
		cursor: default;

		align-items: center;

		justify-content: center;

		flex-direction: column;

		text-align: center;

		h3 {
			font-size: 2.1rem;

			font-weight: 500;

			text-transform: capitalize;

			line-height: 3rem;
			@media only screen and (max-width: 900px) {
				font-size: 1.6rem !important;
			}
		}

		p {
			max-width: 500px;

			margin: 5px auto;

			line-height: 28px;

			font-size: 0.95rem;
			padding: 0.5rem;

			color: #cacdd2;
			@media only screen and (max-width: 900px) {
				font-size: 0.9rem !important;
			}
		}
	}


	.footer-bottom {
		background: rgb(65, 32, 65);
		width: 100%;

		padding: 20px;

		text-align: center;
		display: flex;
		justify-content: space-between;

		p {
			text-align: left;
			font-size: 0.9rem;
			@media (max-width: 900px) {
				font-size: 0.7rem;
			}

			word-spacing: 2px;
		}

		span {
			text-transform: uppercase;
		}
	}

	@keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

	.footer-menu {
		float: right;
	}

	.footer-menu ul {
		display: flex;
	}

	.footer-menu ul li {
		padding-right: 10px;

		display: block;
	}

	.footer-menu ul li a {
		color: #cfd2d6;

		text-decoration: none;
	}

	.footer-menu ul li a:hover {
		color: rgba(#780a6b, 0.7);
	}

	@media (max-width: 900px) {
		.footer-bottom p {
			float: none;
		}

		.footer-menu ul {
			display: none;

			margin-top: 10px;

			margin-bottom: 20px;

			text-align: center;
		}
	}
</style>
