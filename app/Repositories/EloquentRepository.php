<?php
namespace App\Repositories;

abstract class EloquentRepository implements RepositoryInterface
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $_model;

    /**
     * EloquentRepository constructor
     */
    public function __construct()
    {
        $this->setModel();
    }

    /**
     * get model
     * @return string
     */
    abstract public function getModel();

    /**
     * Set model
     */
    public function setModel(){
        $this->_model = app()->make($this->getModel());
    }

    /**
     * Get All
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll() {
        return $this->_model->all();
    }

    /**
     * Get all have where
     * @param $where = null
     * @param $order = null
     * @param null $page
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAllWhere($where = null, $order = null, $page = null)
    {
        $collection = $this->_model;
        //sort
        if (!is_null($order)) {
            $sort = $order['sort'];
            $key = $order['key'];
            $collection = $collection->orderBy($key, $sort);
        }

        //paginate
        if (!is_null($page)) {
            $collection = $collection->paginate(config('constant.paginate.limit'));
        }else{

            $collection = $collection->get();
        }

        return $collection;
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function find($id) {
        $result = $this->_model->find($id);
        return $result;
    }

    /**
     * Create
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes) {
        return $this->_model->create($attributes);
    }

    /**
     * Update
     * @param $id
     * @param array $attributes
     * @return bool|mixed
     */
    public function update($id, array $attributes) {
        $result = $this->find($id);
        if($result) {
            $result->update($attributes);
            return $result;
        }
        return false;
    }

    /**
     * Delete
     *
     * @param $id
     * @return bool
     */
    public function delete($id){
        $result = $this->find($id);
        if($result) {
            $result->delete();
            return true;
        }
        return false;
    }

    public function uploadFile($file, $path)
    {
        $fileName = time().'.'.$file->extension();
        $file->move($path, $fileName);
        return $fileName;
    }
}
