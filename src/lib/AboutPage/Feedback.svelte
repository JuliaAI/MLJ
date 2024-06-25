<script>
    import aboutPageYaml from '../../data/AboutPage.yaml?raw';
    import YAML from 'yaml'

    // about page data excluding markdown
	let aboutData = YAML.parse(aboutPageYaml);
    console.log(aboutData)
    const topics = aboutData["topics"]
    const email = aboutData["email"]
    console.log(topics)
    console.log(email)

    // state variables for email composition
    let name = '';
    let topic = topics[0];
    let subject = '';
    let feedback = '';

    function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create the email subject and body
        const emailSubject = `${topic} - ${subject}`;
        const body = `Name: ${name}\n\nFeedback:\n${feedback}`;

        // Create the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;

        // Open the email client
        window.location.href = mailtoLink;
    }
</script>

<style>
    form {
        display: flex;
        flex-wrap: wrap;
        max-width: 95%;
        margin: auto;
    }
    .left, .right {
        box-sizing: border-box;
    }
    .left {
        flex: 1;
        padding: 0 1rem 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .right {
        flex: 1;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
    }
    label {
        display: block;
        margin-top: 1rem;
        font-family: 'Lato';
    }
    input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
        font-family: 'Lato';
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    textarea {
        flex: 1;
        resize: none;
    }


    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: rgb(100, 50, 100);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        width: 8rem;
    }
    /* hover */
    button:hover {
        background-color: rgb(78, 7, 78);
    }
</style>

<h2>Get in Touch</h2>
<form on:submit|preventDefault={submitForm}>
    <div class="left">
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} required>
        
        <label for="topic">Topic:</label>
        <select id="topic" bind:value={topic} required>
            {#each topics as topic}
                <option value={topic}>{topic}</option>
            {/each}
        </select>
        
        <label for="subject">Subject:</label>
        <input type="text" id="subject" bind:value={subject} required>
    </div>
    <div class="right">
        <label for="feedback">Feedback:</label>
        <textarea rows="5" id="feedback" bind:value={feedback} required></textarea>
        <button type="submit">Submit</button>
    </div>
</form>
