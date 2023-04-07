using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mission14.Data;

namespace mission14.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }


        public IEnumerable<Movie> Get()
        {
            var movies = context.Movies
                                .Where(m => m.Edited == "Yes")
                                .OrderBy(m => m.Title)
                                .ToArray();
            return movies;
        }
    }
}