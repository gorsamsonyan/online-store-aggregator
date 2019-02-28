using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Weed.Karma.Entities;

namespace Weed.Karma.DAL.Infrastructure
{
    public interface IRepository<T> where T : class, IEntityBase
    {
        T FindById(object id);
        void InsertGraph(T entity);
        Task AddRangeAsync(IEnumerable<T> entities);
        void Update(T entity);
        void UpdateRange(IEnumerable<T> entities);
        void Delete(object id);
        void DeleteRange(IEnumerable<T> entities);
        void Delete(T entity);
        void Insert(T entity);
        Task InsertAsync(T entity);
        RepositoryQuery<T> Query();
        void Destroy(T entity);
       
    }
}
