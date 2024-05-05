using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using TaskManager_Core_WebAPI.Models;

namespace TaskManager_Core_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly TaskManagerDbContext _context;

        public ProjectsController(TaskManagerDbContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            return await _context.Projects.ToListAsync();
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpGet]
        [Route("{searchBy}/{searchText}")]
        public async Task<ActionResult<IEnumerable<Project>>> Search(string searchBy, string searchText)
        {
            List<Project> projects = null;

            if (searchBy.ToUpper() == "PROJECTID")
                projects = await _context.Projects.Where(temp => temp.ProjectID.ToString().Contains(searchText)).ToListAsync();
            else if (searchBy.ToUpper() == "PROJECTNAME")
                projects = await _context.Projects.Where(temp => temp.ProjectName.Contains(searchText)).ToListAsync();
            else if (searchBy.ToUpper() == "DATEOFSTART")
                projects = await _context.Projects.Where(temp => temp.DateOfStart.ToString().Contains(searchText)).ToListAsync();
            else if (searchBy.ToUpper() == "TEAMSIZE")
                projects = await _context.Projects.Where(temp => temp.TeamSize.ToString().Contains(searchText)).ToListAsync();

            if (projects == null)
            {
                return NotFound();
            }

            return projects;
        }


        // PUT: api/Projects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutProject(Project project)
        {
            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(project.ProjectID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(project);
        }

        // POST: api/Projects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            if (_context.Projects == null)
            {
                return Problem("Entity set 'TaskManagerDbContext.Projects'  is null.");
            }
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { id = project.ProjectID }, project);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectExists(int id)
        {
            return (_context.Projects?.Any(e => e.ProjectID == id)).GetValueOrDefault();
        }
    }
}
