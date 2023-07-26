<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            // $orderColumn = request('order_column', 'created_at');
            //   if(!in_array($orderColumn, ['id', 'title', 'created_at'])) {
            //       $orderColumn = 'created_at';
            //   }
            // $orderDirection = request('order_direction', 'desc');
            // if(!in_array($orderDirection, ['asc',  'desc'])) {
            //     $orderColumn = 'DESC';
            // }
            $posts = Post::with('category')
                    // ->orderBy($orderColumn, $orderDirection)
                    ->paginate(10);
       
            //  return PostResource::collection(Post::all());

            return PostResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $this->authorize('posts.create');
        $post = Post::create($request->validated());
        // sleep(2);

        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $this->authorize('posts.update');
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePostRequest $request, Post $post)
    {
        $this->authorize('posts.update');
         $post->update($request->validated());
 

        return new PostResource($post);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $this->authorize('posts.delete');
        $post->delete();

        return response()->noContent();
    }
}
