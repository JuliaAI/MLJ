<script>
    import { onMount } from 'svelte';
  
    let navOpen = false;
  
    function toggleNav() {
      navOpen = !navOpen;
    }
  
    onMount(() => {
      // If a link has a dropdown, add sub menu toggle.
      document.querySelectorAll('nav ul li a:not(:only-child)').forEach(item => {
        item.addEventListener('click', (e) => {
          const sibling =  item.nextElementSibling;
          if (sibling && sibling.classList.contains('nav-dropdown')) {
            sibling.style.display = sibling.style.display === 'block' ? 'none' : 'block';
            // Close one dropdown when selecting another
            document.querySelectorAll('.nav-dropdown').forEach(element => {
              if (element !== sibling) {
                element.style.display = 'none';
              }
            });
            e.stopPropagation();
          }
        });
      });
  
      // Clicking away from dropdown will remove the dropdown class
      document.querySelector('html')?.addEventListener('click', () => {
        document.querySelectorAll('.nav-dropdown').forEach(element => {
          element.style.display = 'none';
        });
      });
    });
  </script>
  
  <section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <a href="./">MLJ.jl</a>
      </div>
      <nav>
        <div class="nav-mobile">
          <a id="nav-toggle" href="#!" on:click={toggleNav} class:active={navOpen}><span></span></a>
        </div>
        <ul class="nav-list" style="{navOpen ? 'display: block;' : 'display: none;'}">
          <!-- Setting the links to #! will ensure that no action takes place on click. -->
          <li><a href="./">Home</a></li>
          <li><a href="./Models">Models</a></li>
          <li><a href="/Ecosystem">Ecosystem</a></li>
          <li><a href="/Tutorials">Tutorials</a></li>
          <li><a href="/Documentation">Documentation</a></li>
          <li><a href="/Cheatsheet">Cheat Sheet</a></li>
          <li><a href="/Contributing">Contributing</a></li>
          <li><a href="/About">About</a></li>
        </ul>
      </nav>
    </div>
  </section>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	section {
        background-color: rgb(100,50,100);
    }
    nav {
		float: right;
	}
	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul li {
		float: left;
		position: relative;
	}
	nav ul li a {
		display: block;
		padding: 0 20px;
		line-height: 70px;
		color: #e6e6e6;
		text-decoration: none;
        font-family: 'Lato';
        font-weight: 500;
		/*
  The full path of this code is nav ul li a:not(:only-child):after. This means that the code will apply to any a tag in our nav list that is NOT an only child, aka any dropdown. The :after means it comes after the output of the tag. I’ve decided that to specify any nav item as a dropdown, it will be followed by a unicode arrow – ▾ (#9662).
  */
	}
	nav ul li a:hover {
		background: rgb(84, 41, 84);
		color: #ffffff;
	}
	nav ul li a:not(:only-child):after {
		padding-left: 4px;
		content: ' ▾';
	}
	nav ul li ul li {
		min-width: 190px;
	}
	nav ul li ul li a {
		padding: 15px;
		line-height: 20px;
	}

	.nav-dropdown {
		position: absolute;
		z-index: 1;
		/* Guarantees that the dropdown will display on top of any content. */
		box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
		display: none;
	}

	.nav-mobile {
		display: none;
		position: absolute;
		top: 0;
		right: 0;
		height: 70px;
		width: 70px;
	}

	@media only screen and (max-width: 1000px) {
		.nav-mobile {
			display: block;

		}

		nav {
			width: 100%;
			padding: 70px 0 15px;
		}
		nav ul {
			display: none;
            background: rgb(100,50,100);
		}
		nav ul li {
			float: none;
		}
		nav ul li a {
			padding: 15px;
            padding-top: 25px;
            padding-bottom: 25px;
			line-height: 20px;
		}
		nav ul li ul li a {
			padding-left: 30px;
		}
	}
	#nav-toggle {
		position: absolute;
		left: 18px;
		top: 25px;
		cursor: pointer;
		padding: 10px 35px 16px 0px;
	}
	#nav-toggle span,
	#nav-toggle span:before,
	#nav-toggle span:after {
		cursor: pointer;
		border-radius: 1px;
		height: 5px;
		width: 35px;
		background: #ffffff;
		position: absolute;
		display: block;
		content: '';
		transition: all 300ms ease-in-out;
	}
	#nav-toggle span:before {
		top: -10px;
	}
	#nav-toggle span:after {
		bottom: -10px;
	}
	#nav-toggle.active span {
		background-color: #ffffff;
	}
	#nav-toggle.active span:before,
	#nav-toggle.active span:after {
		top: 0;
	}
	#nav-toggle.active span:before {
		transform: rotate(45deg);
	}
	#nav-toggle.active span:after {
		transform: rotate(-45deg);
	}

	@media screen and (min-width: 1000px) {
		.nav-list {
			display: block !important;
		}
	}

	.navigation {
		height: 70px;
	}

	.nav-container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.brand {
		position: absolute;
        left: 120px;
        margin-right: 80px;
		float: left;
		line-height: 70px;
		font-size: 1.9em;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 600;
        
        @media only screen and (max-width: 1200px) {
            left: 20px;
        }
	}
	.brand a,
	.brand a:visited {
		color: #f2f2f2;
		text-decoration: none;
	}
</style>
