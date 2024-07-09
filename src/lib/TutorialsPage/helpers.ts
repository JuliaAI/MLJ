export function stageEffectBasedOnURL(tag = null): void {
    // Check if there is a hash in the URL
    const id = (tag) ? tag : window.location.pathname.split('/').pop() || '';

    // replace all %20 with spaces
    const idWithSpaces = id.replace(/%20/g, ' ');
    // Get the element by the id
    const element: HTMLElement | null = document.getElementById(idWithSpaces);
    const elementButton: HTMLElement | null = document.getElementById(idWithSpaces + "-button");

    // Check if the overlay already exists
    const existingOverlay: HTMLElement | null = document.getElementById('custom-overlay');

    // If the element and button exist and the overlay does not exist, proceed
    if (element && elementButton && !existingOverlay) {
        // Create an overlay element
        const overlay: HTMLDivElement = document.createElement('div');
        overlay.id = 'custom-overlay'; // Assign an ID to the overlay
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        overlay.style.zIndex = '999';

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Bring the target element to the front
        element.style.position = 'relative';
        element.style.zIndex = '1000';
        element.style.backgroundColor = 'white'; // Optional: set background to avoid transparency issues
        element.style.borderRadius = '20px';

        // Scale the element as well
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.3s ease-in-out';

        // Put a shadow for 3D effect
        element.style.boxShadow = '2px 2px 4px 3px rgba(0, 0, 0, 0.3)';

        elementButton.style.color = "white";
        elementButton.style.backgroundColor = "#6e4582";

        // Add a click event listener to the overlay to remove the styles when clicked
        overlay.addEventListener('click', () => {
            elementButton.style.color = "";
            elementButton.style.backgroundColor = "";
            element.style.position = '';
            element.style.zIndex = '';
            element.style.backgroundColor = '';
            element.style.borderRadius = '';
            element.style.transform = '';
            element.style.transition = '';
            element.style.boxShadow = '';
            // Remove the overlay
            document.body.removeChild(overlay);
        });

        // Calculate the offset position to scroll just before the element
        const offset = 100; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        // Smooth scroll to the calculated position
        setTimeout(() => {
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 100); // Delay before scrolling
    }
}


export function getTutorialsByTag(navItems: NavigationItem[]): Record<string, Tutorial[]> {
    const tutorialsByTag: Record<string, Tutorial[]> = {};

    navItems.forEach((navigationItem) => {
        navigationItem.sections.forEach((section) => {
            if (section.tags) {
                section.tags.forEach((tag) => {
                    if (!tutorialsByTag[tag]) {
                        tutorialsByTag[tag] = [];
                    }
                    if (section.ilos) {
                        tutorialsByTag[tag].push({ name: section.name, href: section.href, ilos: section.ilos });
                    }
                    else {
                        tutorialsByTag[tag].push({ name: section.name, href: section.href, ilos: [] });
                    }
                });
            }
        });
    });

    return tutorialsByTag;
}

export function getExternalTutorialsByTag(externalTutorialsFlat: any) {
    const tutorialsByTag: any = {};

    externalTutorialsFlat.forEach((section: any) => {
        if (section.tags) {
            section.tags.forEach((tag: any) => {
                if (!tutorialsByTag[tag]) {
                    tutorialsByTag[tag] = [];
                }
                if (section.ilos) {
                    tutorialsByTag[tag].push({ name: section.name, href: section.href, ilos: section.ilos });
                }
                else {
                    tutorialsByTag[tag].push({ name: section.name, href: section.href, ilos: [] });
                }
            });
        }
    });

    return tutorialsByTag;
}


export function removeDuplicatesByKey(arr, key) {
    const seen = new Set();
    return arr.filter((obj) => {
        const value = obj[key];
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
}

export function appendValues(obj1: any, obj2: any) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key) && obj1.hasOwnProperty(key)) {
            obj1[key] = obj1[key].concat(obj2[key]);
        }
    }
}