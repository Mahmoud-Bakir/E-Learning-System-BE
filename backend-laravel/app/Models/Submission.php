<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    use HasFactory;

    public function enrollment()
    {
        return $this->belongsTo(StudentEnrollment::class, 'EnrollmentID');
    }
    
    public function assignment()
    {
        return $this->belongsTo(Assignment::class, 'AssignmentID');
    }
}
