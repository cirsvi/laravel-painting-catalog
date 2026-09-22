<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class LocationRequest extends FormRequest
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
            'name' => 'required|string|max:256',
        ];
    }

    public function messages(): array
    {
        return [
            'required' => 'The ":attribute" field is required.',
            'min' => 'The ":attribute" field must be at least :min characters.',
            'max' => 'The ":attribute" field must not be greater than :max characters.',
            'unique' => 'This ":attribute" value is already taken.',
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'location name',
        ];
    }
}
