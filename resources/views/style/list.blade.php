@extends('layout')

@section('content')

    <h1>{{ $title }}</h1>

    @if (count($items) > 0)

        <table class="table table-striped table-hover table-sm">
            <colgroup>
                <col style="width: 80px;">
                <col>
                <col style="width: 150px;">
            </colgroup>
            <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>

            @foreach($items as $style)
                <tr>
                    <td>{{ $style->id }}</td>
                    <td>{{ $style->name }}</td>
                    <td><a href="/styles/update/{{ $style->id }}" class="btn btn-primary btn-sm">Edit</a>
                        <form action="/styles/delete/{{ $style->id }}" method="post" class="d-inline deletion-form">
                            @csrf
                            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                        </form></td>
                </tr>
            @endforeach

            </tbody>
        </table>

    @else

        <p>No entries found in database.</p>

    @endif

    <a href="/styles/create" class="btn btn-success">Add new</a>

@endsection
