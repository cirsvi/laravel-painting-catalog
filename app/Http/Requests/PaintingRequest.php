<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class PaintingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|min:3|max:256',
            'artist_id' => 'required',
            'style_id' => 'required',
            'location_id' => 'required',
            'description' => 'nullable',
            'year' => 'numeric',
            'image' => 'nullable|image',
            'display' => 'nullable',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'The ":attribute" field is required.',
            'min' => 'The ":attribute" field must be at least :min characters.',
            'max' => 'The ":attribute" field must not be greater than :max characters.',
            'boolean' => 'The ":attribute" field must be true or false.',
            'unique' => 'This ":attribute" value is already taken.',
            'numeric' => 'The ":attribute" field must be a number.',
            'image' => 'The ":attribute" field must be a valid image file.',
        ];
    }

    public function attributes(): array
    {
        return [
            'title' => 'title',
            'artist_id' => 'artist',
            'style_id' => 'style',
            'location_id' => 'location',
            'description' => 'description',
            'year' => 'year',
            'image' => 'image',
            'display' => 'published',
        ];
    }
}
