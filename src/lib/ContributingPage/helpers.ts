export async function fetchIssues(issues, issuesLink) {
    const response = await fetch('https://api.github.com/repos/JuliaAI/MLJ.jl/' + issuesLink);
    const data = await response.json();
    return data;
}