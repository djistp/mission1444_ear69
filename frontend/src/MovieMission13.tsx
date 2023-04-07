import data from './MovieData.json';
const Movies = data.MovieData;

export function MovieListt() {
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead className="font-weight-bold">
          <tr>
            <td>Category</td>
            <td>Title</td>
            <td>Year</td>
            <td>Director</td>
            <td>Rating</td>
            <td>Edited</td>
          </tr>
        </thead>

        <tbody>
          {Movies.map((movie) => (
            <tr>
              <td>{movie.Category}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Director}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
