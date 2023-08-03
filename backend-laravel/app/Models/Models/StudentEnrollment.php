<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentEnrollment extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'UserID', 'ID');
    }

    public function course(){
        return $this->belongsTo(Course::class, 'CourseID', 'ID');
    }
}
