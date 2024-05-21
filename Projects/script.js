function change_theme() {
let theme = document.getElementById('theme');
if (theme.querySelector('i').classList.contains('fa-moon')) {
    theme.querySelector('i').classList.remove('fa-moon');
    theme.querySelector('i').classList.add('fa-sun');
    theme.querySelector('i').style.color = 'white';
    document.body.style.backgroundColor = 'rgb(5, 2, 25)';
    FBtn.querySelector('i').style.color='white';
    FBtn_2.querySelector('i').style.color='white';
    // document.getElementById('section2').style.backgroundColor = '#052174';
    document.querySelectorAll('a').forEach(link => {
    link.style.color = 'white';
    });
    document.querySelectorAll('h4,h3,h1').forEach(link => {
    link.style.color = 'white';
    });
    document.querySelector('nav').style.borderBottomColor='white';
    document.querySelector('footer').style.borderTopColor='white';
    document.querySelector('.fa-bars').style.color='white';
    
    
    // document.getElementById('h12').style.color = 'white';
} else {
    theme.querySelector('i').classList.remove('fa-sun');
    theme.querySelector('i').classList.add('fa-moon');
    theme.querySelector('i').style.color = 'rgb(25, 2, 25)';
    FBtn.querySelector('i').style.color='';
    FBtn_2.querySelector('i').style.color='';
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('a').forEach(link => {
        link.style.color = ''; // Reset color to default
    });
    document.querySelector('nav').style.borderBottomColor='';
    document.querySelector('footer').style.borderTopColor='';
    document.querySelectorAll('h4,h3,h1').forEach(link => {
        link.style.color = ''; // Reset color to default
    });
    // document.getElementById('h12').style.color = ''; // Reset color to default
    // document.getElementById('section2').style.backgroundColor = '';
    document.querySelector('.fa-bars').style.color='';
    
}

}
function show_sideFilter()
    {
        document.querySelector(".SideFltr").style.display="block";
        document.querySelector(".FiltrB").style.display="none";
    }
    function hide_sideFilter()
    {
        document.querySelector(".SideFltr").style.display="none";
        document.querySelector(".FiltrB").style.display="block";
        
    }
function hover_a(link)
    {
    
        link.style.color='blue';
    }
    function hover_link(link)
    {
        let theme = document.getElementById('theme');
        if (theme.querySelector('i').classList.contains('fa-moon')) {
        link.style.color='';
    }else{
        link.style.color='white';
    }
    }
    document.getElementById('filterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get selected partition and category values
        const selectedPartitions = Array.from(document.querySelectorAll('input[name="Part"]:checked')).map(checkbox => checkbox.value);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="Category"]:checked')).map(checkbox => checkbox.value);
        
        // Filter projects based on selected values
        const projects = document.querySelectorAll('.Project');
        projects.forEach(project => {
            const projectPartition = project.getAttribute('data-partition');
            const projectCategory = project.getAttribute('data-category');
            
            // Check if project matches any selected partition and category
            const partitionMatch = selectedPartitions.includes(projectPartition);
            const categoryMatch = selectedCategories.includes(projectCategory);
            
            if (partitionMatch && categoryMatch) {
                project.style.display = 'inline-block'; // Show matching projects
            } else {
                project.style.display = 'none'; // Hide non-matching projects
            }
        });
        
    });
    document.getElementById('filterForm_2').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get selected partition and category values
        const selectedPartitions = Array.from(document.querySelectorAll('input[name="Part"]:checked')).map(checkbox => checkbox.value);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="Category"]:checked')).map(checkbox => checkbox.value);
        
        // Filter projects based on selected values
        const projects = document.querySelectorAll('.Project');
        projects.forEach(project => {
            const projectPartition = project.getAttribute('data-partition');
            const projectCategory = project.getAttribute('data-category');
            
            // Check if project matches any selected partition and category
            const partitionMatch = selectedPartitions.includes(projectPartition);
            const categoryMatch = selectedCategories.includes(projectCategory);
            
            if (partitionMatch && categoryMatch) {
                project.style.display = 'inline-block'; // Show matching projects
            } else {
                project.style.display = 'none'; // Hide non-matching projects
            }
        });
        
    });
    function show_sidebar()
    {
        document.querySelector(".sidebar").style.display="block";
        document.querySelector(".fa-solid.fa-bars").style.display="none";
    }
    function hide_sidebar()
    {
        document.querySelector(".sidebar").style.display="none";
        document.querySelector(".fa-solid.fa-bars").style.display="block";
    }